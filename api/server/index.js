import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import cToken from "./ERP/ctoken";

var app = express();



import {callback} from "./src/auth/auth.controller";
import ClientRouter from "./src/client/client.route"
import OrderRouter from "./src/orders/orders.route";
import ProductRouter from "./src/products/products.route";
import AuthRouter from "./src/auth/auth.route";
import PaymentRouter from "./src/payment/route";
import routeRouter from "./src/route/router";
import { getToken } from "./ERP/ctoken";
import EmployeeRouter from './src/employee/router';
const QBO = require("./ERP/index");



const loadToken = async () => {
    const token = cToken.get();
    if(token) {
        QBO.setRealmId(token.realmId);
        QBO.setRefreshToken(token.refresh_token);
        QBO.setAccessToken(null, token);
    }
}

var port = process.env.PORT || 3000;
const main = async () =>{
    await loadToken();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(cors());
    app.listen(port);
    app.use('/client',ClientRouter);
    app.use('/order',OrderRouter);
    app.use('/product',ProductRouter);
    app.get('/callback',callback);
    app.use('/auth',AuthRouter);
    app.use('/payment',PaymentRouter);
    app.use('/route',routeRouter);
    app.use('/employee',EmployeeRouter);
}

main();