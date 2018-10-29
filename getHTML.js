function getHTML (options, callback) {
  /* Add your code here */
  var https = require('https');
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    //print with callback
    response.on('data', callback);
    });
}
function printHTML (html) {
  console.log(html);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);