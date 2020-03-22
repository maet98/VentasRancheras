import {qbo} from '../../ERP/index'

export function getAll(req,res){
    qbo.findItems({
        fetchAll: true
    },(err, item) =>{
        if(err){
            res.json({message: err});
        }
        res.json(item.QueryResponse);
    })    
}

export function findItem(req, res){
    var name = req.params.name;
    name = '%' + name + '%';
    qbo.findItems([
        {field:'fetchAll', value: true},
        {field: 'Name', value: name, operator: 'LIKE'}]
    ,(err, items) =>{
        if(err){
            console.log(err);
            return res.status(400).json(err);
        }
        res.json(items.QueryResponse);
    }
)}

export function createItem(req,res){
    console.log(req.body);
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
        res.json(item.QueryResponse);
    })
}