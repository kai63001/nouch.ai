package controller

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"nouch.co/m/service"
)

type PostGoogleLogin struct {
	IdToken string `json:"id_token"`
}

func GoogleLogin(c *fiber.Ctx) error {
	var data PostGoogleLogin
	if err := c.BodyParser(&data); err != nil {
		fmt.Println(err.Error())
		return c.Status(500).JSON(bson.M{"status": "error", "message": err.Error()})
	}
	payload, errVerify := service.VerifyGoogleToken(data.IdToken)
	if errVerify != nil {
		return c.Status(500).JSON(bson.M{"status": "error", "message": errVerify.Error()})
	}
	var id string
	// check email is duplicate
	result, check := service.CheckEmailisDuplicate(payload["email"].(string))
	if check {
		id = result
	} else {
		// register user
		resultId, errRegister := service.RegisterGoogleUser(payload)
		if errRegister != nil {
			return c.Status(500).JSON(bson.M{"status": "error", "message": errRegister.Error()})
		}
		id = resultId
	}
	token, errToken := service.CreateJwtToken(payload, id)
	if errToken != nil {
		return c.Status(500).JSON(bson.M{"status": "error", "message": errToken.Error()})
	}
	return c.Status(200).JSON(bson.M{"status": "success", "token": token, "id": id})
}
