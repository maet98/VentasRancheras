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
import PaymentRouter from "./src/payment/route";
import routeRouter from "./src/route/router";
import { db } from './src/db';
import EmployeeRouter from './src/employee/router';

app.use('/client',ClientRouter);
app.use('/order',OrderRouter);
app.use('/product',ProductRouter);
app.get('/callback',callback);
app.use('/auth',AuthRouter);
app.use('/payment',PaymentRouter);
app.use('/route',routeRouter);
app.use('/employee',EmployeeRouter);

db.authenticate()
.then(() =>{
    console.log("Connected to DB");
})
.catch(err =>{
    console.error(`Error: ${err}`);
})

var port = process.env.PORT || 3000;


app.listen(port,() =>{
    console.log(`Connected to port: ${port}`);
})