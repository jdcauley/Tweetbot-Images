/**
 * ImagesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  create: function(req, res) {
		var fs = require('fs-extra');
    
    var message = req.param('message');
		var source = req.param('source');
		var tweetbotmedia = req.param('media');
		
		var tmp_path = req.files.media.path;
		
		var name = tmp_path.substr(tmp_path.lastIndexOf('/', tmp_path.length));
		console.log(name);
		var target_path = '.tmp/public/uploads/photos' + name;

		fs.copy(tmp_path, target_path, function(err) {
			if (err) throw err;
			fs.copy(target_path, 'i' + name, function(err) { });
			fs.unlink(tmp_path, function() {
				if (err) throw err;
				console.log('File uploaded to: ' + target_path);
				Images.create( { message: message, source: source, media: name, url: 'http://piec.es/i' + name }).done(function(err, p) {
  				if (err) {
    				console.log(err);
    				  res.set('error', 'DB Error');
    				  res.send(500, {error: 'DB Error'});
    				} else {
    				  // res.redirect('/images/');
              res.json( { url: 'http://piec.es/i' + name } );
  				}
				});
				
				//res.json( { filelink: '/images/photos' + name } );
			});
		});
		// Photo.create( {file}
	},



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ImagesController)
   */
  _config: {}

  
};
