var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
const dotenv = require('dot-env')
const configVar = dotenv.config()

app.use(require('body-parser').urlencoded({ extended: false }));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'invertime.off@gmail.com',
      pass: configVar.pass
    }
  });
  
  

app.post('/mail/', function(req, res){

    req.body;
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