var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports=(function(){
	return{
		index:  function(req,res){
			console.log(":::::The backend controller has been asccessed, sir::::::::::");
			Order.find({}, function(err, results){
				if(err){
					console.log(err+"ooooooo There seems to be a back controller error, sir oooooooo");
				}else{
					console.log("8888  Backend query selection was successful, sir  8888888888");
					res.json(results);
					console.log(results);
				}
			})

		},
		create: function(req, res){
			console.log(req.body);
			var order = new Order(req.body);
			order.save(function(err, results){
				if(err){
					console.log("}}}}}}}}} Data Creation: Unsuccessful, sir {{{{{{{{{{")
				}else{
					console.log("-+-+-+-+  Backend creation was successful, sir  -+-+-+-+");
					res.json(results)
				}
			})
		}
	}
})();