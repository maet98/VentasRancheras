import {qbo} from "../../ERP/index";

export function getAll(req,res){
    qbo.findCustomers({fetchAll: true},(err,ans) =>{
        if(err){
            return res.json(err);
        }
        res.json(ans.QueryResponse.Customer);
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
    const {DisplayName, PrimaryEmailAddr, PrimaryPhone, CompanyName} = req.body;
    qbo.createCustomer({
        DisplayName: DisplayName,
        PrimaryEmailAddr: PrimaryEmailAddr,
        PrimaryPhone: PrimaryPhone,
        CompanyName: CompanyName
    }, (err,customer)=>{
        if(err){
            return res.json({message: err});
        }
        return res.json(customer);
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