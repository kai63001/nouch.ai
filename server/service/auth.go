package service

import (
	"context"
	"os"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"google.golang.org/api/idtoken"
	"nouch.co/m/database"
)

type UserData struct {
	Email           string `json:"email"`
	Name            string `json:"name"`
	Picture         string `json:"picture"`
	Id              string `bson:"_id,omitempty"`
	StripeAccountId string `bson:"stripe_account_id,omitempty"`
}

func VerifyGoogleToken(token string) (map[string]interface{}, error) {
	payload, err := idtoken.Validate(context.Background(), token, os.Getenv("GOOGLE_CLIENT_ID"))
	if err != nil {
		return make(map[string]interface{}), err
	}
	return payload.Claims, nil
}

func CheckEmailisDuplicate(email string) (string, bool) {
	var user UserData
	err := database.ClientDB.Collection("users").FindOne(context.TODO(), bson.M{"email": email}).Decode(&user)
	if err != nil {
		return "", false
	}
	return user.Id, true
}

func RegisterGoogleUser(payload map[string]interface{}) (string, error) {
	user := UserData{
		Email:   payload["email"].(string),
		Name:    payload["name"].(string),
		Picture: payload["picture"].(string),
	}
	result, err := database.ClientDB.Collection("users").InsertOne(context.TODO(), user)
	if err != nil {
		return "", err
	}
	//return lst
	return result.InsertedID.(primitive.ObjectID).Hex(), err
}
