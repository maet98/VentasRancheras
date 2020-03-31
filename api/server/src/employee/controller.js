const QBO = require("../../ERP/index");
import {employee} from "../models/employee";
import config from "config";
import bcrypt, { hashSync, compareSync } from "bcrypt";
import { employeeCustomer } from "../models/employee-customer";
import jwt from "jsonwebtoken";

export async function getAll(req, res) {
    const qbo = await QBO.getQbo();
    qbo.findEmployees({fetchAll: true},(err,ans) =>{
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(ans.QueryResponse);
        }
    });
}

export async function filterName(req,res){
    const qbo = await QBO.getQbo();
    var name = req.params.name;
    name = '%'+name+'%';
    qbo.findEmployees([
    {field:'fetchAll',value: true},
    {field:'DisplayName',value:name,operator:'LIKE'}
    ],(err,employees) =>{
        if(err){
            return res.status(400).json(err);
        }
        res.json(employees.QueryResponse);
    })
}

export async function getById(req, res){
    console.log(req.params.Id);
    employee.findAll({
        where:{
            employeeId: req.params.Id
        },
        limit: 1
    })
    .then(ans =>{
        if(ans.length === 0){
            res.json({"msg": "There is not Employee with that id: "+req.params.Id})
        }
        else{
            res.json(ans[0]);
        }
    })
    .catch(err =>{
        res.status(400).json(err);
    })
}

export async function createEmployee(req, res) {
    const qbo = await QBO.getQbo();
    const newEmployee = {
        GivenName: req.body.firstName +" "+req.body.lastName,
        FamilyName: req.body.lastName,
    }
    qbo.createEmployee(newEmployee,(err,ans) =>{
        if(err){
            return res.status(400).json(err);
        }
        const dbEmployee = {
            employeeId: ans.Id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        };
        employee.create(dbEmployee)
        .then(resp =>{
            res.json(resp);
        })
        .catch(err =>{
            qbo.deleteEmployee(ans.Id,(err,ans) =>{
                if(err){

                }
                else{
                    res.status(400).json(err);
                }
            })
        })
    })
}

export function login(req, res) {
    const {email, password} = req.body;
    employee.findAll({where:{email: email}})
    .then(ans => {
        if(compareSync(password,ans[0].password)){
            res.json({ok: true})
        }
        else{
            res.json({ok:false})
        }
    })
    .catch(err =>{
        res.status(400).json({msg:`User not found with that email: ${email}`});
    });
}


export async function getCustomer(req, res){
    const id = req.params.id;
    const qbo = await QBO.getQbo();
    qbo.findCustomers({fetchAll: true},(err,ans) =>{
        if(err){
            return res.status(400).json(err);
        }
        var customers = ans.QueryResponse.Customer;
        var arr =[]
        employeeCustomer.findAll({
            where:{
                employeeId: id
            }
        })
        .then(employee =>{
            for(let i = 0;i < customers.length;i++){
                let can = false;
                for(let j = 0;j < employee.length;j++){
                    if(employee[j].dataValues.CustomerId == customers[i].Id){
                        can = true;
                        break;
                    }
                }
                if(can == true){
                    arr.push(customers[i])
                }
            }
            return res.json(arr);  
        })
    })
}