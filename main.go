package main

// compiledaemon --command="./paypeng"
// http://go-database-sql.org/index.html
// https://github.com/appleboy/gorush -> A push notification server written in Go

import (
	"context"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/awslabs/aws-lambda-go-api-proxy/gin"
  "github.com/caarlos0/env/v10"
	"github.com/joho/godotenv"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)
var ginLambda *ginadapter.GinLambda


func init() {
	LoadEnvVariables()
	utils.ConnectToDB()
}

func mainLambdaOnly () {
  defer utils.DBConnection.Close()
	r := gin.Default()
	r.Use(cors.Default())
	
	r.GET("/healthz", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Server Is Live"})
	})

  ginLambda = ginadapter.New(r)
	lambda.Start(Handler)
}

func mainMultiEnvironment() {
	// Instantiating Gin
	defer utils.DBConnection.Close()
	r := gin.Default()
	r.Use(cors.Default())
	
	r.GET("/healthz", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Server Is Live"})
	})


	// Checking if it's a lambda environment
	if os.Getenv("AWS_LAMBDA_FUNCTION_NAME") == "" {
		// Not in a Lambda Environment
		r.Run(":" + utils.Env.Port)
	} else {
		ginLambda = ginadapter.New(r)
		lambda.Start(Handler)
	}
}

func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// If no name is provided in the HTTP request body, throw an error
	return ginLambda.ProxyWithContext(ctx, req)
}

func LoadEnvVariables() {
  // If not lambda environment, load from .env file,
  if os.Getenv("AWS_LAMBDA_FUNCTION_NAME") == "" {
		if err := godotenv.Load(); err != nil {
  		log.Fatal("Error loading .env file")
  	}
	}
  
  // Regardless of the environment pass the env
	if err:= env.Parse(&Env); err != nil {
		log.Fatal("Error parsing .env variables")
	}
}
