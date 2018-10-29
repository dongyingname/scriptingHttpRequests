function getHTML (options, callback) {

  /* Add your code here */
  var input = process.argv.splice(2)[0];
  var https = require('https');
  var str = '';
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    response.on('data', function (data) {
      str += data + '\n';
      return printHTML;
    }
  }

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
