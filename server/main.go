package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"nouch.co/m/database"
	"nouch.co/m/router"
)

func main() {
	//cors all
	// end
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
	app := fiber.New()
	app.Use(cors.New())
	database.Mongodb()

	//hello world
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	router.AuthRouter(app)
	router.StripeRouter(app)

	log.Fatal(app.Listen(":4000"))
}
