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

    const mailToUs = mailTransport.sendMail({
      from: 'Jupiter and the Giraffe <salam@jupiterandthegiraffe.com>',
      to: ['samuel@jupiterandthegiraffe.com', 'suzannah@jupiterandthegiraffe.com'],
      replyTo: val.email,
      subject: `${val.name} contacted Jupiter and the Giraffe`,
      html: val.html,
      text: val.message
    });

    const html = '<p>Hey, ' + val.name.split(' ')[0] + '!</p>' +
      '<p>Thanks for contacting Jupiter and the Giraffe. We know how busy life can be so we appreciate ' +
      'the time you\'ve spent visiting our website.</p>' +
      '<p>Rest-assured we\'ve recieved your message loud and clear and we\'ll get back to you as soon as we can.</p>' +
      '<p>Have an awesome day,</p>' +
      '<p>The Giraffe</p>';

    const mailToThem = mailTransport.sendMail({
      from: 'Jupiter and the Giraffe <noreply@jupiterandthegiraffe.com>',
      to: val.email,
      subject: "🚀 Thanks for contacting Jupiter and the Giraffe, you're awesome!",
      html,
      text: html.replace(/<\/p>/g, ' ').replace(/<p>/g, '')
    });

    return Promise.all([mailToUs, mailToThem])
      .then(error => error ? console.log(error) : console.log('Mail sent!'))
      .catch(e => console.log(e));
  });
