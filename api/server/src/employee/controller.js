import { qbo } from "../../ERP/index";
import {employee} from "../models/employee";
import config from "config";
import bcrypt from "bcrypt"

export function getAll(req, res) {
    qbo.findEmployees({fetchAll: true},(err,ans) =>{
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(ans.QueryResponse);
        }
    });
}

export function createEmployee(req, res) {
    const newEmployee = {
        GivenName: req.body.firstName,
        FamilyName: req.body.lastName,
    }
    qbo.createEmployee(newEmployee,(err,ans) =>{
        if(err){
            return res.status(400).json(err);
        }
        const hash = bcrypt.hashSync(req.body.passwrod, config.get("saltRounds"));
        const dbEmployee = {
            employeeId: ans.Id,
            username: req.body.username,
            email: req.body.email,
            password: hash,
            type: req.body.type
        };
        employee.create(dbEmployee)
        .then(ans =>{
            res.json(ans);
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    })
}
