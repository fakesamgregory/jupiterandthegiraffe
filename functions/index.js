// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const mailTransport = nodemailer.createTransport(mg({
  auth: {
    api_key: functions.config().mailgun.key,
    domain: 'mg.jupiterandthegiraffe.com',
  }
}));

exports.sendContactMessage = functions.database
  .instance('jupiterandthegiraffe-1662d')
  .ref('/messages/{pushKey}')
  .onCreate(event => {
    const snapshot = event.data;

    console.log('Event has fired with this data', snapshot);

    // Only send email for new messages.
    if (!snapshot.exists()) {
      return null;
    }

    const val = snapshot.val();

    console.log('values', val);

    if(!val.name || !val.email || !val.html || !val.message) {
      return null;
    }

    return mailTransport.sendMail({
        from: 'Jupiter and the Giraffe <salam@jupiterandthegiraffe.com>',
        to: ['samuel@jupiterandthegiraffe.com', 'suzannah@jupiterandthegiraffe.com'],
        replyTo: val.email,
        subject: `${val.name} contacted Jupiter and the Giraffe`,
        html: val.html,
        text: val.message
      })
      .then(error => error ? console.log(error) : console.log('Mail sent to: samuel@jupiterandthegiraffe.com'))
      .catch(e => console.log(e));
  });
