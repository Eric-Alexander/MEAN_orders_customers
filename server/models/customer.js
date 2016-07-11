var mongoose=require('mongoose');

var CustomerSchema=new mongoose.Schema({
	name: String,
	time : { type : Date, default: Date.now }
});

mongoose.model("Customer", CustomerSchema);