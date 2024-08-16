import { SESClient, SendEmailCommand} from "@aws-sdk/client-ses";

const client = new SESClient({ region: "us-east-1" });


export const handler = async (event) => {
  // TODO implement
  const path = event.rawPath
  const method = event.requestContext.http.method
  
  // Payceler Contact form
  if(path === '/mail' && method === 'POST'){
    const body = JSON.parse(event.body) //JSON.stringify({fields: event.body})
    
    const paycelerEmail = new SendEmailCommand({
      Source: 'example@email.com',
      Destination: {
        ToAddresses: ['example1@email.com', 'example2@email.com']
      },
      Message: {
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `Message in text format`
          },
          Html: {
            Charset: 'UTF-8',
            Data: `<html lang="en"><h1>New Contact Us Message</h1><p>FirstName: ${body.firstName}</P><p>LastName: ${body.lastName}</P><p>Email: ${body.email}</P><p>Phone Number: ${body.phone}</P><p>Message: ${body.message}</P></html>`,
          },
        },
        Subject: {
          Data: 'New Contact Us Message'
        }
      }
    })
    
    try {
      const data = await client.send(paycelerEmail);
        console.log("response", data)
        return {statusCode: 200, body: {message: "payceler email sent"}}
      } catch (error) {
        console.log("error", error)
        return {statusCode: 400, body: {message: "payceler email error"}}
      }
        
  }
  
  return {
    statusCode: 404,
    body: 'not found'
  }
  
  
  
};
