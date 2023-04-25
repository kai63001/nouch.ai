package service

import (
	"os"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/mitchellh/mapstructure"
)

func CreateJwtToken(data map[string]interface{}, id string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		//exp at 7 day from now
		"exp": time.Now().Add(time.Hour*24*7).Unix() * 1000,
		//iat at now
		"iat":     time.Now().Unix(),
		"email":   data["email"],
		"name":    data["name"],
		"picture": data["picture"],
		"id":      id,
	})
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET_JWT")))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func GetJwtClaims(token string) (UserData, error) {
	// *remove Bearer from token
	newToken := token[7:]
	var user UserData

	claims := jwt.MapClaims{}
	_, err := jwt.ParseWithClaims(newToken, claims, func(newToken *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET_JWT")), nil
	})
	if err != nil {
		return user, err
	}

	//convert claims to struct UserData with mapstructure
	if err := mapstructure.Decode(claims, &user); err != nil {
		return user, err
	}

	return user, nil
}
