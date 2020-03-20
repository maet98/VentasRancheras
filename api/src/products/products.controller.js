var qbo = require("../../ERP/index");

qbo.createItem

module.exports = {
    getAll: (req,res) =>{
        qbo.findItems({
            fetchAll: true
        },(err, item) =>{
            if(err){
                res.json({message: err});
            }
            res.json(item);
        })
    },
    findItem: (req, res) =>{

    },
    createItem: (req,res) =>{
        console.log(req.Body);
        const {name, qty, description, unitPrice} = req.body;
        qbo.createItem({name: name, 
            UnitPrice: unitPrice,
            QtyOnHand: qty,
            description: description
        },
        (err, item) =>{
            if(err){
                return res.json(err);
            }
            res.json(item);
        })
    }
}