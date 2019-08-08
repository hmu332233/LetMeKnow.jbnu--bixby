module.exports.function = function request (utterance) {
  const secret = require('secret');
  const http = require('http');
  const console = require('console');
  const data = {
    userRequest: {
      user: {
        id: 'bixby_user'
      },
      utterance: utterance
    }
  }
  const res = http.postUrl(secret.get('bot'), data, { passAsJson: true });
  return {
    message: JSON.parse(res).template.outputs[0].simpleText.text
  }
}
