var nodemailer = require('nodemailer');
var express = require('express');
var cors = require('cors')
var app = express();
require('dotenv').config()

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json)
app.use(cors())

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'invertime.off@gmail.com',
      pass: process.env.MAILPASS
    }
  });
  
  

app.post('/mail/', function(req, res){

  console.log('test')

    req.body;
    console.log(req.body)
    //res.send(req.body)
    var mailOptions = {
      from: req.body.from,
      to: 'milescodeit@gmail.com',
      subject: req.body.subject,
      text: req.body.text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error)
        res.json({error});
      } else {
        console.log('Email sent: ' + info.response);
        res.json({
            from: req.body.from,
            subject: req.body.subject,
            text: req.body.text
         });
      }
    });
    
});


var sendMail = (from,subject,text) => {
    
}


app.listen(3000);