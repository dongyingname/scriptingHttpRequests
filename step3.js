var input = process.argv.splice(2)[0];
var https = require('https');
function getAndPrintHTML (options) {
  // 'sytantris.github.io/http-examples/step1.html'
  var str= '';
  // var requestOptions = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step1.html'
  // };
  // /* Add your code here */
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      //console.log('data', data);
      str += data + '\n';
    });
    response.on('end', function(){
      console.log(str);
    });
  });
}
getAndPrintHTML(input);
