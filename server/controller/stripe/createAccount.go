package controller

import (
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"nouch.co/m/service"
)

type CreateAccountRequest struct {
	Country string `json:"country"`
}

func CreateAccount(c *fiber.Ctx) error {
	var body CreateAccountRequest
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	// get token from header authorization
	token := c.Get("Authorization")

	data, err := service.CreateStandardAccount(token, body.Country)
	if err != nil {
		return c.Status(400).JSON(bson.M{"status": 400, "message": err.Error()})
	}

	return c.Status(200).JSON(data)
}
