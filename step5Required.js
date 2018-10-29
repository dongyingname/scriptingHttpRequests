var getHTML = require('./step5Function').main;
var callback = require('./step5Function').callback;
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, callback);