const QBO = require("../../ERP/index")
import {stop} from "../models/stop";

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
        Line: line,
        ShipAddr: req.body.ShipAddr
    }

    qbo.createEstimate(Order, (err, estimate) =>{
        if(err){
            res.json({error: err});
        }
        res.json(estimate);
    })
}

export async function getAvailableOrders(req,res){
    const qbo = await QBO.getQbo();
    qbo.findEstimates({fetchAll: true},(err,estimate) =>{
        if(err){
            console.log(err);
            return res.json({error: err});
        }
        var orders = estimate.QueryResponse.Estimate;
        var ans = [];
        stop.findAll({
            where:{
                entregado: false
            }
        })
        .then(stops =>{
            for(let i = 0;i < orders.length;i++){
                var can = false;
                for(let j = 0;j < stops.length;j++){
                    if(orders[i].Id == stops[j].orderId){
                        can = true;
                    }
                }
                if(!can){
                    ans.push(orders[i]);
                }
            }
            res.json({"orders": ans})
        })
    });
}

export async function getAll(req, res){
    const qbo = await QBO.getQbo();
    qbo.findEstimates({fetchAll: true},(err,estimate) =>{
        if(err){
            res.json({error: err});
        }
        res.json(estimate.QueryResponse.Estimate);
    });
}