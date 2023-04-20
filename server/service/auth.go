package service

import (
	"context"
	"os"

	"google.golang.org/api/idtoken"
)

func VerifyGoogleToken(token string) (map[string]interface{}, error) {
	payload, err := idtoken.Validate(context.Background(), token, os.Getenv("GOOGLE_CLIENT_ID"))
	if err != nil {
		return make(map[string]interface{}), err
	}
	return payload.Claims, nil
}

func CheckEmailisDuplicate(email string) bool {
	return false
}
