package service

import (
	"os"
	"time"

	"github.com/golang-jwt/jwt"
)

func CreateJwtToken(data map[string]interface{}) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		//exp at 7 day from now
		"exp": time.Now().Add(time.Hour*24*7).Unix() * 1000,
		//iat at now
		"iat":     time.Now().Unix(),
		"email":   data["email"],
		"name":    data["name"],
		"picture": data["picture"],
	})
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET_JWT")))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
