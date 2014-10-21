var Idea, mongoose, newIdea;
//var _ = require('lodash');
mongoose = require("mongoose");

var Idea = mongoose.model("Idea",{
  user_id:String,
 
  time:{ type: Date, default: Date.now }, 
  
  description: String,

  title: String,
  email: String,
  //tags: [String],
  ip: String,
  comments: [
  {
    user_id: {type: String, ref: 'User'},
    content: String,
    date: { type: Date, default: Date.now }
  }]



});


var newIdea = function(req, res, next){
  //getClientIp(req);
	console.log("hi newIdea~");
  console.log((req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress);
	
  var newIdea = new Idea({
    user_id: req.param('user_id'),
    email: req.param("email"),
    title: req.param('title'),
		description: req.param('description'),
		tags: req.param('tags'),
    ip: (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress
	});

	newIdea.save(function(err){
	  if (err){
	  	console.log(err);
	  	res.json(500,err);
	  }else{
	  	res.json(200,{success:newIdea.description});
	  }
	});


};

var listIdea = function(req, res, next){
    Idea.find({ })
      .sort('-time')
      .exec(function(err, ideas){
        console.log(ideas);
        if(!err){
            return res.send(ideas);
        }
        else{
            return console.log(err);
        }
    });
};
var getClientAddress = function (req) {
    console.log((req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress);
    return (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
};
/*
// snippet taken from http://catapulty.tumblr.com/post/8303749793/heroku-and-node-js-how-to-get-the-client-ip-address
function getClientIp(req) {
  var ipAddress;
  // The request may be forwarded from local web server.
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  if (forwardedIpsStr) {
    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    // If request was not forwarded
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
};*/
/*
  Idea.find(user_id)
    .sort({time: 'desc'})
    .exec(function(err, ideas){
      if(!err){
        res.json(200,ideas);
      }else{
        console.log(err);
      }
    });
*/

exports.getIp = getClientAddress;
exports.newIdea = newIdea;
exports.listIdea = listIdea;