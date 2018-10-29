var getHTML = require('./http-function').main;
var callback = require('./http-function').callback;
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, callback);