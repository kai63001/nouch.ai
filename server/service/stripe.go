package service

import (
	"context"
	"os"

	"github.com/stripe/stripe-go"
	"github.com/stripe/stripe-go/account"
	"github.com/stripe/stripe-go/accountlink"
	"go.mongodb.org/mongo-driver/bson"
	"nouch.co/m/database"
)

func CreateStandardAccount(token string, country string) (map[string]interface{}, error) {

	// ? Check if country is supported
	countryData, err := checkCountryIsSupported(country)
	if err != nil {
		return make(map[string]interface{}), err
	}

	// ? Get data from token
	data, err := GetJwtClaims(token)
	if err != nil {
		return make(map[string]interface{}), err
	}

	// ? Check if user has already created an account by have stripe_account_id in user document
	stripeAccountId, err := getStripeAccountId(data.Email, countryData.Code)
	if err != nil {
		return make(map[string]interface{}), err
	}

	// ? Create a new account
	connectionLink, err := createAccountConnectLink(stripeAccountId)
	if err != nil {
		return make(map[string]interface{}), err
	}

	return bson.M{
		"stripe_account_id": stripeAccountId,
		"connection":        connectionLink,
	}, nil
}

type SupportedCountries struct {
	Name string `bson:"name"`
	Code string `bson:"code"`
}

func checkCountryIsSupported(country string) (SupportedCountries, error) {
	// * Check if country is supported
	// * If not, return error
	// * If yes, return true
	var supportedCountries SupportedCountries
	err := database.ClientDB.Collection("stripe_countries").FindOne(context.TODO(), bson.M{
		"name": country,
	}).Decode(&supportedCountries)
	if err != nil {
		return supportedCountries, err
	}

	return supportedCountries, nil
}

func getStripeAccountId(email string, country string) (string, error) {
	// * Check if user has already created an account by have stripe_account_id in user document
	// * If not, create a new account
	// * If yes, return the account id
	var user UserData
	err := database.ClientDB.Collection("users").FindOne(context.TODO(), bson.M{"email": email}).Decode(&user)
	if err != nil {
		return "", err
	}

	// * if user did not create an account, create a new account
	if user.StripeAccountId == "" {
		// * Create a new account
		// * Save the account id in user document
		stripe.Key = os.Getenv("SCRIPE_SECRET_KEY")

		params := &stripe.AccountParams{Type: stripe.String(string(stripe.AccountTypeStandard)), Country: stripe.String(country)}
		result, _ := account.New(params)
		user.StripeAccountId = result.ID
		//update to database
		_, err := database.ClientDB.Collection("users").UpdateOne(context.TODO(), bson.M{"email": email}, bson.M{
			"$set": bson.M{
				"stripe_account_id": result.ID,
			},
		})
		if err != nil {
			return "", err
		}

	}

	return user.StripeAccountId, nil
}

func createAccountConnectLink(accountId string) (*stripe.AccountLink, error) {
	stripe.Key = os.Getenv("SCRIPE_SECRET_KEY")

	params := &stripe.AccountLinkParams{
		Account:    stripe.String(accountId),
		FailureURL: stripe.String("https://example.com/reauth"),
		SuccessURL: stripe.String("https://example.com/return"),
		Type:       stripe.String("account_onboarding"),
	}
	result, _ := accountlink.New(params)

	return result, nil
}
