var express = require('express')

var app = express();


app.use('/client',require("./src/client/client.route"));
app.use('/order',require("./src/orders/orders.route"));
app.use('/auth',require("./src/auth/auth.route"));
app.use('/product',require("./src/products/products.route"));


var port = process.env.PORT || 4000;

app.listen(port,() =>{
    console.log(`Connected to port: ${port}`);
})