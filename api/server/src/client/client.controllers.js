const QBO = require("../../ERP/index");

export async function getAll(req,res){
    const qbo = await QBO.getQbo();
    qbo.findCustomers({fetchAll: true},(err,ans) =>{
        if(err){
            if(err.fault.type === "AUTHENTICATION") res.redirect('/auth/signin');
            return err;
        }
        res.json(ans.QueryResponse.Customer);
    })
}
    
export async function getOne(req,res){
    const qbo = await QBO.getQbo();
    qbo.getCustomer(req.param.id,(err,customer) =>{
        if(err){
            return res.json({message: err});
        }
        return res.json(customer);
    })
}

export async function createOne(req,res) {
    const qbo = await QBO.getQbo();
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

export async function filterName(req, res){
    const qbo = await QBO.getQbo();
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