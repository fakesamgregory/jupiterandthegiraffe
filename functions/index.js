// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password.replace('\\', ''));
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database
  .ref('/messages/{pushKey}')
  .onCreate(event => {
    const snapshot = event.data;
    // Only send email for new messages.
    if (!snapshot.exists()) {
      return null;
    }

    const val = snapshot.val();

    const mailOptions = {
      to: 'samuel@jupiterandthegiraffe.com',
      from: 'salam@jupiterandthegiraffe.com',
      subject: `Information Request from ${val.name}`,
      html: val.html
    };

    return mailTransport.sendMail(mailOptions)
      .then(() => console.log('Mail sent to: salam@jupiterandthegiraffe.com'))
      .catch(e => console.log(e));
  });
