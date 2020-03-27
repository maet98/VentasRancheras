import QBO from "../../ERP/index";

export async function getAll(req, res){
    const qbo = await QBO.getQbo();
    qbo.findPayments({fetchAll: true},
    (err, payments) =>{
        if(err){
            return res.json(err);
        }
        res.json(payments.QueryResponse);
    });
}

export async function create(req,res){
    const qbo = await QBO.getQbo();
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