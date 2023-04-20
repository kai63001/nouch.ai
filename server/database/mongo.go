package database

//mongodb://localhost:27017
import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

// Connection URI

// ClientDB is a pointer to a mongo.Client object
var ClientDB *mongo.Database

// Mongodb returns a pointer to a mongo.Client object
func Mongodb() *mongo.Client {
	// Create a new client and connect to the server
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(os.Getenv("MONGODB_URI")))
	if err != nil {
		panic(err)
	}
	// Ping the primary
	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		panic(err)
	}
	ClientDB = client.Database("nouch")
	fmt.Println("Successfully connected and pinged.")
	return client
}
