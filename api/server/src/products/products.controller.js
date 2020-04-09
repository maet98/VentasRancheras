import QBO from '../../ERP/index'

export async function getAll(req,res){
    const qbo = await QBO.getQbo();
    qbo.findItems({
        fetchAll: true
    },(err, item) =>{
        if(err){
            res.json({message: err});
        }
        res.json(item.QueryResponse);
    })    
}

export async function findItem(req, res){
    const qbo = await QBO.getQbo();
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

export async function createItem(req,res){
    const qbo = await QBO.getQbo();
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