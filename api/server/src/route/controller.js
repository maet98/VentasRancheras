import { stop } from "../models/stop";
import route from "../models/route";
import { employeeCustomer } from "../models/employee-customer";

route.hasMany(stop, {foreignKey: 'route_id'});
export function getStop(req,res) {
    stop.findAll()
    .then((stop) =>{
        res.json(stop);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
}


export function getRouteByUser(req,res) {
    console.log(req.params.userId);
    route.findAll({
        limit: 1,
        where: {
            user: req.params.userId
        },
        order:[[ 'createdAt', 'DESC']]
        ,
        include:[stop]
    })
    .then((ans) =>{
        res.json(ans);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
}

export function getRoute(req,res) {
    route.findAll({include:[stop]})
    .then((routes) =>{
        res.json(routes);
    })
    .catch(err => console.error(err));
}

let createStop = async function(element,route,user) {
    element.route_id = route;
    stop.create(element)
    .then((ans) =>{
        if(element.hasOwnProperty("client")){
            console.log(element);
            employeeCustomer.create(
            {CustomerId: element.client,employeeId:user})
            .then(a =>{
                return ans;
            })
        }
        else{
            return ans;
        }
    })
    .catch(err =>{
        return null;
    })
}
let createStops = async (stops, id, user) =>{
    var arr = [];
    for(let i = 0;i < stops.length;i++){
        const stop = await createStop(stops[i],id,user);
        arr.push(stop);
    }
    return arr;
}

export async function createRoute(req,res,next) {
    const {stops, user} = req.body;
    let count = stops.lenght;
    route.create({user:user})
    .then(async (ans) => {
        ans.stops = await createStops(stops,ans.id,user)
        console.log(ans);
        return res.json(ans);
    })
    
}