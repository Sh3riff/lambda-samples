#!/bin/bash

# Read the .env file and export the variables
export $(cat .env | xargs)

# Use the environment variables in the AWS CLI command
aws lambda update-function-configuration \
--function-name Kwiveti_Server \
--environment "Variables={
    NODE_ENV=$NODE_ENV,
    FAUNADB_KEY=$FAUNADB_KEY,
    FAUNADB_Domain=$FAUNADB_Domain,
    JWT_SIGNATURE=$JWT_SIGNATURE,
    FLUTTERWAVE_SECRET_KEY=$FLUTTERWAVE_SECRET_KEY
    }"


# Remember to make the script executable with chmod +x lambda_prod_env.sh
# Then run with ./lambda_prod_env.sh
