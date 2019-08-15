// Import in our db models
const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get('/api/gun', (req, res) => {
    db.Gun.findAll({
      order: [
        ['id', 'ASC'],
      ],
    }).then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.json({ error: err });
    });
  });

  app.post('/api/gun', (req, res) => {
    db.Gun.create(req.body)
      .then((rows) => {
        res.json({
          success: true,
          rowsAdded: rows,
        });
      }).catch((err) => {
        res.json({ error: err });
      });
  });

  app.put('/api/gun', (req, res) => {
    console.log(req.body);
    for (let i = 0; i < req.body.data.length; i++) {
      const sq = parseInt(req.body.data[i].qty);

      const theID = req.body.data[i].id;

      db.Gun.update({ stock_quantity: sq }, { where: { id: theID } }).catch((err) => {
        throw new Error(err);
      });
    }
    db.Gun.findAll({}).then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.json(err);
    });
  });
};
