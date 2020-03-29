const QBO = require("../../ERP/index");
import {employee} from "../models/employee";
import config from "config";
import bcrypt from "bcrypt";
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
        const hash = bcrypt.hashSync(req.body.password, config.get("saltRounds"));
        const dbEmployee = {
            employeeId: ans.Id,
            username: req.body.username,
            email: req.body.email,
            password: hash,
            type: req.body.type
        };
        employee.create(dbEmployee)
        .then(resp =>{
            res.json(resp);
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    })
}

export function login(req, res) {
    const {email, password} = req.body;
    employee.findOne({email: email})
    .then(ans => {
        if(bcrypt.compareSync(password,ans.password)){
            jwt.sign({
                id: ans.email
            },
            config.get('jwtSecret'), {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) throw err;
                var response = {token, ans};
                res.json(response);
            });
        }
        else{
            res.status(400).json({msg:"Incorrect Password"});
        }
    })
    .catch(err =>{
        res.status(400).json({msg:`User not found with that email: ${email}`});
    })
    bcrypt.compareSync
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