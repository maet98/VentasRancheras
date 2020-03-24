import { stop } from "../models/stop";
import route from "../models/route";

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

let createStop = async function(element,route) {
    const { priority,name, latitude, longitude} = element;
    var newStop = {name: name, latitude: latitude, longitude:longitude, route_id:route, priority: priority}
    if(!element.client){
        newStop.client = element.client;
    }
    stop.create(newStop)
    .then((ans) =>{
        return ans;
    })
    .catch(err =>{
        return null;
    })
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

let createStops = async (stops, id) =>{
    var arr = [];
    stops.forEach(element => {
        createStop(element,id)
        .then((ans) =>{
            arr.push(ans);
        })
    })
}

export function createRoute(req,res,next) {
    const {stops, user} = req.body;
    let count = stops.lenght;
    route.create({user:user})
    .then((ans) => {
        ans.stops = [];
        createStops(stops,ans.id)
        .then(() =>{
            res.json(ans);
        });
    })
    
}