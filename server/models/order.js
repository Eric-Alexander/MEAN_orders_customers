var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({

	product: String,
	quantity: {type : Number, default : 50},
	time : { type : Date, default: Date.now }
})

mongoose.model("Order", OrderSchema);

var Order = mongoose.model("Order", OrderSchema);