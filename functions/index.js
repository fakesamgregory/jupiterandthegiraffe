// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendContactMessage = functions.database
  .instance('jupiterandthegiraffe-1662d')
  .ref('/messages/{pushKey}')
  .onCreate(event => {
    const snapshot = event.data;
    // Only send email for new messages.
    if (!snapshot.exists()) {
      return null;
    }

    const val = snapshot.val();

    if(!val.name || !val.email || !val.html) {
      return null;
    }

    const mailOptions = {
      from: `"${val.name} 🚀" <${val.email}>`,
      to: 'samuel@jupiterandthegiraffe.com, suzannah@jupiterandthegiraffe.com',
      subject: `${val.name} contacted JatG!!`,
      html: val.html
    };

    return mailTransport.sendMail(mailOptions)
      .then(error => error ? console.log(error) : console.log('Mail sent to: salam@jupiterandthegiraffe.com'))
      .catch(e => console.log(e));
  });
