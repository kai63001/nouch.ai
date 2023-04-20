package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	controller "nouch.co/m/controller/auth"
)

func AuthRouter(app *fiber.App) {
	api := app.Group("/auth", logger.New())
	api.Post("/google", controller.GoogleLogin)

}
