package controller

import (
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"nouch.co/m/service"
)

type PostDevLogin struct {
	Email   string `json:"email"`
	Picture string `json:"picture"`
	Name    string `json:"name"`
}

func DevLogin(c *fiber.Ctx) error {
	var data PostDevLogin
	if err := c.BodyParser(&data); err != nil {
		return c.Status(500).JSON(bson.M{"status": "error", "message": err.Error()})
	}
	payload := map[string]interface{}{
		"email":   data.Email,
		"picture": data.Picture,
		"name":    data.Name,
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
