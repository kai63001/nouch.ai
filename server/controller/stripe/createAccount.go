package controller

import (
	"github.com/gofiber/fiber/v2"
	"nouch.co/m/service"
)

func CreateAccount(c *fiber.Ctx) error {
	// get token from header authorization
	token := c.Get("Authorization")

	data, err := service.CreateStandardAccount(token)
	if err != nil {
		return c.Status(500).JSON(err.Error())
	}

	return c.Status(200).JSON(data)
}
