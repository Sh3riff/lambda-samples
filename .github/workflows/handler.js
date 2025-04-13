// export ur expree app without listining

const serverless = require('serverless-http')
const app = require('./dist/app')

module.exports.handler = serverless(app.default)


// For regular server
// import dotenv from 'dotenv'
// dotenv.config()
// import app from './dist/app'
// app.listen(process.env.PORT || 5000, () => console.log('server up', ))
