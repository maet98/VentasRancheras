var qbo = require('../../ERP/index');

module.exports = {
    createOrder: (req, res) =>{
        qbo.createEstimate({fetchAll: true}, (err, estimate) =>{
            if(err){
                res.json({error: err});
            }
            res.json(estimate);
        })
    },
    getAvailable: (req, res) =>{
        qbo.findEstimates({fetchAll: true},(err,estimate) =>{
            if(err){
                res.json({error: err});
            }
            res.json(estimate);
        });
    }
}

 