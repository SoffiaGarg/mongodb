//var Hapi=require('hapi');
//var joi=require('joi');
//var path=require('path');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//Step1-Connection Establshed Code
var db = mongoose.createConnection('localhost', 'student');

db.on('error', function () {
  console.log('Error! Database connection failed.');
});

db.once('open', function (argument) {
  console.log('Database connection established!');
});

//Step2-Create the Schema
//var Schema=mongoose.Schema;
var userSchema=new mongoose.Schema(
	{
		"userId":{type:String,unique:true,require:true},
		"userName":{type:String,require:true}
	});

var user=mongoose.model("user",userSchema);

var thor=new user({
  "userId":1,
	"userName":"shiva"
});

/*user.find(function(err, data) {
  if (err)
	console.log(err);
	else {
		console.log("Showing Something");
	}
});*/
user.find().exec(function(err, result) {
      if (err) {
        console.log("Error Occured");
      } else {
        console.log("Done");
      }
    });

// mongoose.disconnect();
//Step3-Insert data in database
/*server.route({
	method:'POST',
	path:'/insert',
	config:{
	validate:{
	    payload:{
		  userId:joi.string().required(),
			userName:joi.string().required()
		}},

	handler:function(request,reply)
	{

   var user1 = new user(request.payload);
		user1.save(function(err)
	{
		if(err)
		console.log("Error in insertion........");
		else {
			console.log("Insertion Successfully done.......");
		}
	});
}

}//config close
});//route close

/*server.route({
	method:"GET",
	path:'/fetch',
	handler:function(request,reply)
	{
		user.find({},function(err)
	{
		if(err)
		console.log("Fetching Problem........");
		else {
			console.log("Fetching Successful");
		}
	})
	}
});*/

/*server.start(function()
{
	console.log("Server is running at:"+server.info.uri);
});*/
