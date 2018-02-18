// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const auth = {
  auth: {
    api_key: functions.config().mailgun.apikey,
    domain: functions.config().mailgun.domain
  }
};

const mailTransport = nodemailer.createTransport(mg(auth));

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
      .then(error => error ? console.log(error) : console.log('Mail sent to: salam@jupiterandthegiraffe.com'))
      .catch(e => console.log(e));
  });
