import { stop } from "../models/stop";
import route from "../models/route";


export function getStop(req,res) {
    stop.findAll()
    .then((stop) =>{
        res.json(stop);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
}

export async function createStop(req) {
    const {client, priority,name, address, route} = req.body;
    stop.create({name: name, client: client, address: address, routeId:route, priority: priority})
    .then((ans) =>{
        return ans;
    })
    .catch(err =>{
        return null;
    })
}

export function getRouteByUser(req,res) {
    route.findAll({
        limit: 1,
        where: {
            user: req.params.userId
        },
        order:[[ 'createdAt', 'DESC']]
    })
    .then((ans) =>{
        res.json(ans);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
}

export function getRoute(req,res) {
    route.findAll()
    .then((routes) =>{
        res.json(routes);
    })
    .catch(err => console.error(err));
}

export function createRoute(req,res) {
    const {stops, name, user} = req.body;
    route.create({user:user,name:name})
    .then((ans) => {
        ans.stops = [];
        stops.forEach(element => {
            element.route = ans.id;
            createStop(element)
            .then(ele =>{
                if(ele){
                    ans.stops.add(ele);
                }
                else{
                    return res.status(400).json(msg);
                }
            })
            .catch(err => res.json(err));
        });
        res.json(ans);
    })
    
}