const QBO = require("../../ERP/index")

export async function createOrder(req, res){
    const qbo = await QBO.getQbo();
    const { Items , clientId} = req.body;
    var line = [];
    for(let i = 0;i < Items.length;i++){
        const item = {
            DetailType: "SalesItemLineDetail",
            SalesItemLineDetail: {
                ItemRef :{
                    value: Items[i].itemId
                }
            },
            Amount: Items[i].Amount
        }
        line.push(item);
    } 
    const Order = {
        CustomerRef: {
            value: clientId
        }, 
        Line: line
    }

    qbo.createEstimate(Order, (err, estimate) =>{
        if(err){
            res.json({error: err});
        }
        res.json(estimate);
    })
}

export async function getAvailable(req, res){
    const qbo = await QBO.getQbo();
    qbo.findEstimates({fetchAll: true},(err,estimate) =>{
        if(err){
            res.json({error: err});
        }
        res.json(estimate.QueryResponse);
    });
}