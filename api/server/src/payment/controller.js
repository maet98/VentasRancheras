import {qbo} from "../../ERP/index";

export function getAll(req, res){
    qbo.findPayments({fetchAll: true},
    (err, payments) =>{
        if(err){
            return res.json(err);
        }
        res.json(payments.QueryResponse);
    });
}

export function create(req,res){
    const payment = {
        TotalAmt: req.body.totalAmt,
        CustomerRef: {
            value: req.body.ClientId
        }
    }
    qbo.createPayment(payment,(err,payment) =>{
        if(err){
            return res.status(400).json(err);
        }
        res.json(payment);
    })
}