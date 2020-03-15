var qbo = require("../../ERP/index");

module.exports = {
    getAll:(req,res) => {
        qbo.findCustomers({fetchAll: true},(err,customers) =>{
            if(err){
                return res.json(err);
            }
            return res.json(customers);
        })
    },

    getOne: (req,res) =>{
        qbo.getCustomer(req.param.id,(err,customer) =>{
            if(err){
                return res.json({message: err});
            }
            return res.json(customer);
        })
    },

    createOne: (req,res) =>{
        const {DisplayName, PrimaryEmailAddr, PrimaryPhone, ShipAddr} = req.body;
        qbo.createCustomer({
            DisplayName: DisplayName,
            PrimaryEmailAddr: PrimaryEmailAddr,
            PrimaryPhone: PrimaryPhone,
            ShipAddr: ShipAddr
        }, (err,customer)=>{
            if(err){
                return res.json({message: err});
            }
            return res.json(customer);
        })
    },    
    filterName: (req, res) =>{
        const name = req.params.name;
        
    }
}
