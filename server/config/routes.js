

var customer=require('./../controllers/customers.js');
var order=require('./../controllers/orders.js');


module.exports=function(app){
	console.log('^><^><^><^><^>Routing requests online, sir<^><^><^><^><^><^');

	app.get('/customers', customer.index);

	app.post('/customers/new', customer.create);

	app.delete('/customers/:_id', function(req,res){
		customer.delete(req,res);
	});

	app.get('/orders', order.index);

	app.post('/orders/new', order.create);

}