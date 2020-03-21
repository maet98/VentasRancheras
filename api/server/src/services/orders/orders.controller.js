import {qbo} from '../../ERP/index';

export function createOrder(req, res){
    qbo.createInvoice({fetchAll: true}, (err, estimate) =>{
        if(err){
            res.json({error: err});
        }
            res.json(estimate);
    })
}

export function getAvailable(req, res){
    qbo.findEstimates({fetchAll: true},(err,estimate) =>{
        if(err){
            res.json({error: err});
        }
        res.json(estimate.QueryResponse);
    });
}