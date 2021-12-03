const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localPath = process.argv[3];


request(url, (error, response, body) => {
  if (error) {
    console.log(error.code);
  return;
  }
  //If the URL is invalid, terminate the app explaining to the user what went wrong, and not write the response body to the file
  fs.writeFile('/vagrant/w2/d3/page-fetcher/./index.html ', body, error => {
    if (error) {
      console.log(`File path invalid`);  //If the file path is invalid, the app should fail and let the user know about this issue.
      return;
    }
  const size = body.length;
  console.log(`Downloaded and saved ${size} bytes to ./index.html`);
  })
});
