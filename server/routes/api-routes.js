// Import in our db models
const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    app.get('/api/gun', function(req, res){
        db.Gun.findAll({
            order: [
                ['id', 'ASC']
            ]
        }).then(function(rows){
            res.json(rows);
        }).catch(function(err){
            res.json({ error: err });
        });
    });

    app.post('/api/gun', function(req, res){
        db.Gun.create(req.body)
            .then(function(rows){
                res.json({ success: true,
                    rowsAdded: rows });
            }).catch(function(err){
            res.json({ error: err });
        });
    });

    app.put('/api/gun', function(req, res){
        console.log(req.body);
        for (let i = 0; i < req.body.data.length; i++){

            let sq = parseInt(req.body.data[i].qty);

            let theID = req.body.data[i].id;

            db.Gun.update({ stock_quantity : sq
            },{ where : { id : theID }
            }).catch(function(err){
                throw new Error(err);
            });
        }
        db.Gun.findAll({}).then(function(rows){
            res.json(rows);
        }).catch(function(err){
            res.json(err);
        });
    });
};