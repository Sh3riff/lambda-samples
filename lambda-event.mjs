export const handler = async(event) => {

  console.log(event)


  // The lambda appId have been replaced with abcdefghijk

  {
    "headers": {
      "content-length": "22",
      "x-amzn-tls-version": "TLSv1.3",
      "x-forwarded-proto": "https",
      "apikey": "abc-123",
      "x-forwarded-port": "443",
      "x-forwarded-for": "102.88.69.174",
      "accept": "*/*",
      "exchange-key": "abc-123",
      "x-amzn-tls-cipher-suite": "TLS_AES_128_GCM_SHA256",
      "x-amzn-trace-id": "Root=1-66bcc675-386231b06e561a0527dde2da",
      "host": "abcdefghijk.lambda-url.us-east-1.on.aws",
      "content-type": "application/json",
      "accept-encoding": "gzip, deflate, br",
      "user-agent": "Thunder Client (https://www.thunderclient.com)"
    },
    "isBase64Encoded": false,
    "rawPath": "/upload",
    "routeKey": "$default",
    "requestContext": {
      "accountId": "anonymous",
      "timeEpoch": 1723647605573,
      "routeKey": "$default",
      "stage": "$default",
      "domainPrefix": "abcdefghijk",
      "requestId": "1ad65b7c-e39f-422c-9568-9505004695cf",
      "domainName": "abcdefghijk.lambda-url.us-east-1.on.aws",
      "http": {
        "path": "/upload",
        "protocol": "HTTP/1.1",
        "method": "POST",
        "sourceIp": "102.88.69.174",
        "userAgent": "Thunder Client (https://www.thunderclient.com)"
      },
      "time": "14/Aug/2024:15:00:05 +0000",
      "apiId": "abcdefghijk"
    },
    "queryStringParameters": {
      "model": "toyota",
      "page": "14"
    },
    "body": "{\n  \"email\": \"hello\"\n}",
    "version": "2.0",
    "rawQueryString": "page=14&model=toyota"
}

};
