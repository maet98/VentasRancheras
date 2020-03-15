import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());


import {callback} from "./src/auth/auth.controller";
import ClientRouter from "./src/client/client.route"
import OrderRouter from "./src/orders/orders.route";
import ProductRouter from "./src/products/products.route";
import AuthRouter from "./src/auth/auth.route";
import BillRouter from "./src/bills/router";
import PaymentRouter from "./src/payment/route";

app.use('/client',ClientRouter);
app.use('/order',OrderRouter);
app.use('/product',ProductRouter);
app.get('/callback',callback);
app.use('/auth',AuthRouter);
app.use('/bill',BillRouter);
app.use('/payment',PaymentRouter);

var port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`Connected to port: ${port}`);
})