export const handler = async(event) => {

  return {
    statusCode: 200,
    headers: {'Content-Type': 'text/html'},
    body: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="">
        <p>Lambda Html</p>
    </div>
</body>
</html>
    `
  }


};
