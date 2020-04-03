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

const packageReq = (snapshot, context, package) => {
  // Only send email for new messages.
  if (!snapshot.exists()) {
    return null;
  }

  const val = snapshot.val();

  console.log('values', val);

  if(!val.email) {
    return null;
  }

  const ourEmail = '<p>Somebody just ordered the ' + package + '!</p>' +
    '<p>You can contact them back on ' + val.email + '</p>';

  const mailToUs = mailTransport.sendMail({
    from: 'Jupiter and the Giraffe <salam@jupiterandthegiraffe.com>',
    to: ['samuel@jupiterandthegiraffe.com'],
    replyTo: val.email,
    subject: `${val.email} contacted Jupiter and the Giraffe`,
    html: ourEmail,
    text: ourEmail.replace(/<\/p>/g, ' ').replace(/<p>/g, '')
  });

  const clientEmail = '<p>Hey!</p>' +
    '<p>Thanks for your interest in the ' + package + '.</p>' +
    '<p>Rest-assured we\'ve recieved your message loud and clear and we\'ll get back to you as soon as we can.</p>' +
    '<p>While we get our things in order and respond, why not sign up to our monthly emails where we share branding advice and recent news?</p>' +
    '<p><a href="https://jupiterandthegiraffe.us20.list-manage.com/subscribe?u=c25f6fc2b7f38aa344e8d5b4a&id=467e3cb96c">Sign up here</a>.</p>' +
    '<p>Have an awesome day,</p>' +
    '<p>Samuel Gregory</p>';

  const mailToThem = mailTransport.sendMail({
    from: 'Jupiter and the Giraffe <noreply@jupiterandthegiraffe.com>',
    to: val.email,
    subject: "🚀 Thanks for contacting Jupiter and the Giraffe, you're awesome!",
    html: clientEmail,
    text: clientEmail.replace(/<\/p>/g, ' ').replace(/<p>/g, '')
  });

  return Promise.all([mailToUs, mailToThem])
    .then(error => error ? console.log(error) : console.log('Mail sent!'))
    .catch(e => console.log(e));
}

exports.websiteContact = functions.database
  .instance('jupiterandthegiraffe-1662d')
  .ref('/website-package/{pushKey}')
  .onCreate((snapshot, context) => {
    packageReq(snapshot, context, 'Website Package')
  });

exports.mvpContact = functions.database
  .instance('jupiterandthegiraffe-1662d')
  .ref('/mvp-package/{pushKey}')
  .onCreate((snapshot, context) => {
    packageReq(snapshot, context, 'MVP Package')
  });

exports.sendContactMessage = functions.database
  .instance('jupiterandthegiraffe-1662d')
  .ref('/messages/{pushKey}')
  .onCreate((snapshot, context) => {
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
      to: ['samuel@jupiterandthegiraffe.com'],
      replyTo: val.email,
      subject: `${val.name} contacted Jupiter and the Giraffe`,
      html: val.html,
      text: val.message
    });

    const html = '<p>Hey, ' + val.name.split(' ')[0] + '!</p>' +
      '<p>Thanks for contacting Jupiter and the Giraffe. We know how busy life can be so we appreciate ' +
      'the time you\'ve spent visiting our website.</p>' +
      '<p>Rest-assured we\'ve recieved your message loud and clear and we\'ll get back to you as soon as we can.</p>' +
      '<p>While we get our things in order and respond, why not sign up to our monthly emails where we share branding advice and recent news?</p>' +
      '<p><a href="https://jupiterandthegiraffe.us20.list-manage.com/subscribe?u=c25f6fc2b7f38aa344e8d5b4a&id=467e3cb96c">Sign up here</a>.</p>' +
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
