package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	controller "nouch.co/m/controller/stripe"
)

func StripeRouter(app *fiber.App) {
	api := app.Group("/stripe", logger.New())
	api.Post("/createAccount", controller.CreateAccount)
}
