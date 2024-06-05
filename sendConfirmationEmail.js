const sendConfirmationEmail = require('./functions/sendConfirmationEmail.js');

exports.handler = async (event, context) => {
  return await sendConfirmationEmail.handler(event, context);
};