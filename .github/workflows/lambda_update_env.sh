#!/bin/bash

# Read the .env file and export the variables
export $(cat .env | xargs)

# Use the environment variables in the AWS CLI command
aws lambda update-function-configuration \
--function-name kwiveti_buyer_dev \
--environment "Variables={
    FAUNADB_KEY=$FAUNADB_KEY,
    FLUTTERWAVE_SECRET_KEY=$FLUTTERWAVE_SECRET_KEY,
    SECRET=$SECRET,
    SERVER_BASE_URL=$SERVER_BASE_URL,
    }"


# Remember to make the script executable with chmod +x lambda_dev_env.sh
# Then run with ./lambda_dev_env.sh
