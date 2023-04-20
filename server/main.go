package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"nouch.co/m/database"
	"nouch.co/m/router"
)

func main() {
	// end
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
	database.Mongodb()
	app := fiber.New()

	router.AuthRouter(app)

	log.Fatal(app.Listen(":4000"))
}
