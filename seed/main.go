package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"nouch.co/seed/seeder"
)

func main() {
	fmt.Println(len(os.Args), os.Args)
	//get the first argument
	//check if argis[1] is model
	fmt.Println(os.Args[1])
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
	if (len(os.Args) > 1) && (os.Args[1] == "--model") {
		seeder.SeedStripeCountries()
	}
}
