/**
 * ShorturlsController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  create: function(res, req) {
  
    var urlToShorten = req.urlToShorten; 
    
    if (!urlToShorten) {
      console.log('request did not contain a url')
    } else {
      console.log('request to shorten' + urlToShorten);
      
      urlToShorten = addhttp(urlToShorten);
        var baseURL = 'http://localhost:1337/u/';
        
      var shortCode = createShortCode(urlToShorten);
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.render('short', {shortUrl: baseURL + shortCode });
    }
  }

};
