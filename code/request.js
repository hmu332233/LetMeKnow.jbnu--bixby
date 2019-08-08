module.exports.function = function request (utterance) {
  const secret = require('secret');
  const http = require('http');

  const data = {
    userRequest: {
      user: {
        id: 'bixby_user'
      },
      utterance: utterance
    }
  };
  
  const res = http.postUrl(secret.get('bot'), data, { format: 'json', passAsJson: true });
  return {
    message: res.template.outputs[0].simpleText.text
  }
}
