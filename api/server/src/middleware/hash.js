import {hashSync, hash} from "bcryptjs"
import config from "config";

export const hashPassword = (req,res,next) =>{
    let hash = hashSync(req.body.password,config.get("salt"));
    req.body.password = hash;
    next();
}