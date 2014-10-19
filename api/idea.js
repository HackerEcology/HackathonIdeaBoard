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
  comments: [
  {
    user_id: {type: String, ref: 'User'},
    content: String,
    date: { type: Date, default: Date.now }
  }]



});


var newIdea = function(req, res, next){
	console.log("hi newIdea~");
	var newIdea = new Idea({
    user_id: req.param('user_id'),
    email: req.param("email"),
    title: req.param('title'),
		description: req.param('description'),
		tags: req.param('tags')
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
    Idea.find({ },null,
        function(err, ideas){
        console.log(ideas);
        if(!err){
            return res.send(ideas);
        }
        else{
            return console.log(err);
        }
    });
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
};

exports.newIdea = newIdea;
exports.listIdea = listIdea;
