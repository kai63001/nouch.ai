package seeder

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"nouch.co/seed/database"
)

func SeedStripeCountries() {
	database.Mongodb()
	// seed stripe countries
	// mongodb insert many

	countries := []interface{}{
		bson.M{"name": "Australia", "code": "AU"},
		bson.M{"name": "Austria", "code": "AT"},
		bson.M{"name": "Belgium", "code": "BE"},
		bson.M{"name": "Brazil", "code": "BR"},
		bson.M{"name": "Bulgaria", "code": "BG"},
		bson.M{"name": "Canada", "code": "CA"},
		bson.M{"name": "Croatia", "code": "HR"},
		bson.M{"name": "Cyprus", "code": "CY"},
		bson.M{"name": "Czech Republic", "code": "CZ"},
		bson.M{"name": "Denmark", "code": "DK"},
		bson.M{"name": "Estonia", "code": "EE"},
		bson.M{"name": "Finland", "code": "FI"},
		bson.M{"name": "France", "code": "FR"},
		bson.M{"name": "Germany", "code": "DE"},
		bson.M{"name": "Gibraltar", "code": "GI"},
		bson.M{"name": "Greece", "code": "GR"},
		bson.M{"name": "Hong Kong", "code": "HK"},
		bson.M{"name": "Hungary", "code": "HU"},
		bson.M{"name": "India", "code": "IN"},
		bson.M{"name": "Indonesia", "code": "ID"},
		bson.M{"name": "Ireland", "code": "IE"},
		bson.M{"name": "Italy", "code": "IT"},
		bson.M{"name": "Japan", "code": "JP"},
		bson.M{"name": "Latvia", "code": "LV"},
		bson.M{"name": "Liechtenstein", "code": "LI"},
		bson.M{"name": "Lithuania", "code": "LT"},
		bson.M{"name": "Luxembourg", "code": "LU"},
		bson.M{"name": "Malaysia", "code": "MY"},
		bson.M{"name": "Malta", "code": "MT"},
		bson.M{"name": "Mexico", "code": "MX"},
		bson.M{"name": "Netherlands", "code": "NL"},
		bson.M{"name": "New Zealand", "code": "NZ"},
		bson.M{"name": "Norway", "code": "NO"},
		bson.M{"name": "Poland", "code": "PL"},
		bson.M{"name": "Portugal", "code": "PT"},
		bson.M{"name": "Romania", "code": "RO"},
		bson.M{"name": "Singapore", "code": "SG"},
		bson.M{"name": "Slovakia", "code": "SK"},
		bson.M{"name": "Slovenia", "code": "SI"},
		bson.M{"name": "Spain", "code": "ES"},
		bson.M{"name": "Sweden", "code": "SE"},
		bson.M{"name": "Switzerland", "code": "CH"},
		bson.M{"name": "Thailand", "code": "TH"},
		bson.M{"name": "United Arab Emirates", "code": "UAE"},
		bson.M{"name": "United Kingdom", "code": "GB"},
		bson.M{"name": "United States", "code": "US"},
	}

	_, err := database.ClientDB.Collection("stripe_countries").InsertMany(context.Background(), countries)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Stripe countries seeded")
}
