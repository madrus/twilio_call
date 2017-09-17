// jshint esversion:6, -W033
import twilio from 'twilio'
require('dotenv').config()

const url = 'http://4419a217.ngrok.io/voice'
const fromNum = '+31646252000'
const toNum = fromNum
// const fromNum = '+31202421401'

const twilioClient = twilio()

twilioClient
.makeCall({
  to: toNum,
  from: fromNum,
  url: url
})
.then((message) => console.log(message.sid))

// const accountSid = process.env.TWILIO_ACCOUNT_SID
// const authToken = process.env.TWILIO_AUTH_TOKEN
// const client = twilio(accountSid, authToken)

// client
//   .calls
//   .create({
//     url: url,
//     to: toNum,
//     from: fromNum
//   }, function (err, call) {
//     if (err) {
//       return console.log(err)
//     }

//     console.dir(call)
//   });
