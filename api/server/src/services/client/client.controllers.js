import {qbo} from "../../ERP/index";

export function getAll(req,res){
    qbo.findCustomers({fetchAll: true},(err,customers) =>{
        if(err){
            return res.json(err);
        }
        return res.json(customers.QueryResponse);
    })
}
    
export function getOne(req,res){
    qbo.getCustomer(req.param.id,(err,customer) =>{
        if(err){
            return res.json({message: err});
        }
        return res.json(customer);
    })
}

export function createOne(req,res) {
    const {DisplayName, PrimaryEmailAddr, PrimaryPhone} = req.body;
    qbo.createCustomer({
        DisplayName: DisplayName,
        PrimaryEmailAddr: PrimaryEmailAddr,
        PrimaryPhone: PrimaryPhone,
    }, (err,customer)=>{
        if(err){
            return res.json({message: err});
        }
        return res.json(customer.QueryResponse);
    })
}

export function filterName(req, res){
    var name = req.params.name;
    name = '%'+name+'%';
    qbo.findCustomers([
    {field:'fetchAll',value: true},
    {field:'DisplayName',value:name,operator:'LIKE'}
    ],(err,custormes) =>{
        if(err){
            return res.status(400).json(err);
        }
        res.json(custormes.QueryResponse);
    })
}