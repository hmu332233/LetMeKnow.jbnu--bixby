module.exports.function = function request () {
  const http = require('http');
  const console = require('console');
  const data = {
    userRequest: {
      user: {
        id: 'bixby_user'
      },
      utterance: '진수당'
    }
  }
  const res = http.postUrl('', data, { passAsJson: true });
  return {
    message: JSON.parse(res).template.outputs[0].simpleText.text
  }
}
