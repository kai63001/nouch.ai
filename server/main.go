package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"nouch.co/m/router"
)

func main() {
	app := fiber.New()

	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	router.AuthRouter(app)

	log.Fatal(app.Listen(":4000"))
}
