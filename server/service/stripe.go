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

func CreateStandardAccount(token string) (map[string]interface{}, error) {
	data, err := GetJwtClaims(token)
	if err != nil {
		return make(map[string]interface{}), err
	}

	stripeAccountId, err := getStripeAccountId(data.Email)
	if err != nil {
		return make(map[string]interface{}), err
	}

	connectionLink, err := createAccountConnectLink(stripeAccountId)
	if err != nil {
		return make(map[string]interface{}), err
	}

	return bson.M{
		"stripe_account_id": stripeAccountId,
		"connection":        connectionLink,
	}, nil
}

func getStripeAccountId(email string) (string, error) {
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

		params := &stripe.AccountParams{Type: stripe.String(string(stripe.AccountTypeStandard))}
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
