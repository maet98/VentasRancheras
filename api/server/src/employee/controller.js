const QBO = require("../../ERP/index");
import {employee} from "../models/employee";
import config from "config";
import bcrypt, { compareSync } from "bcrypt"
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