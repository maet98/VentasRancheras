const QBO = require("../../ERP/index");
import { employeeCustomer } from "../models/employee-customer";

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
    const {Lat, Long,DisplayName, PrimaryEmailAddr, PrimaryPhone, CompanyName} = req.body;
    qbo.createCustomer({
        DisplayName: DisplayName,
        PrimaryEmailAddr: PrimaryEmailAddr,
        PrimaryPhone: PrimaryPhone,
        CompanyName: CompanyName,
        ShipAddr:{
            Line1: Lat,
            Line2: Long,
            Line3:"Calle 4",
            Line4:"Embrujo 1ero",
            CountryCode:"DR",
            PostalCodeSuffix:5100,
            CountrySubDivisionCode:"+1",
            PostalCode:51000,
            Country:"Dominican Republic",
            City:"Santiago"
        }
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

export async function getById(req,res){
	const qbo = await QBO.getQbo();
	const id = req.params.id;
	qbo.getCustomer(id,(err,ans) =>{
		if(err){
			return res.status(400).json(err);
		}
		res.json(ans);
	});
}

export async function getAvailable(req,res){
    const qbo = await QBO.getQbo();
    qbo.findCustomers({fetchAll: true},(err,customers) =>{
        if(err){
            return res.status(400).json(err);
        }
        var arr = [];
        customers = customers.QueryResponse.Customer;
        console.log(customers);
        employeeCustomer.findAll()
        .then((relation) =>{
            for(let i = 0;i < customers.length;i++){
                let can = false;
                for(let j = 0;j < relation.length;j++){
                    if(customers[i].Id == relation[j].dataValues.CustomerId){
                        can = true;
                        break;
                    }
                }
                if(can == false){
                    arr.push(customers[i]);
                }
            }
            res.json(arr);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
    })
}
