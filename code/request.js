module.exports.function = function request (utterance) {
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
  const res = http.postUrl('', data, { passAsJson: true });
  return {
    message: JSON.parse(res).template.outputs[0].simpleText.text
  }
}
