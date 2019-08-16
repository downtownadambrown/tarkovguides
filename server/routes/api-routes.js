// Import in our db models
const db = require('../models');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get('/api/guns', (req, res) => {
    db.Guns.findAll({
      order: [
        ['id', 'ASC'],
      ],
    }).then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.json({ error: err });
    });
  });

  app.post('/api/guns', (req, res) => {
    db.Guns.create(req.body)
      .then((rows) => {
        res.json({
          success: true,
          rowsAdded: rows,
        });
      }).catch((err) => {
        res.json({ error: err });
      });
  });

  app.put('/api/guns', (req, res) => {
    /*    for (let i = 0; i < req.body.data.length; i++) {

          db.Guns.update({ stock_quantity: sq }, { where: { id: id } }).catch((err) => {
            throw new Error(err);
          });
        }*/
    db.Guns.findAll({}).then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.json(err);
    });
  });

  app.get('/api/ammo', (req, res) => {
    db.Ammo.findAll({}).then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.json({ error: err });
    });
  });

/*  app.get('/api/ammo/:id', (req, res) => {
    console.log(`GET /api/ammo/${id} :: req.body: `, req.body);

    db.Ammo.findOne({
      where: { id: id }
    }).then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.json({ error: err });
    });
  });*/

  app.post('/api/ammo', (req, res) => {
    db.Ammo.create(req.body)
        .then((rows) => {
          res.json({
            success: true,
            rowsAdded: rows,
          });
        }).catch((err) => {
      res.json({ error: err });
    });
  });

  app.put('/api/ammo', (req, res) => {
    const id = req.body.data.id;

/*      db.Ammo.update({
      ...req.body.data
    }, {
      where: { id: id }
    }).catch((err) => {
      throw new Error(err);
    });*/
    db.Ammo.findAll({}).then((rows) => {
      res.statusCode = 200;
      res.json(rows);
    }).catch((err) => {
      res.json(err);
    });
  });

  app.get('/api/users', (req, res) => {
    db.Users.findAll({ raw: true }).then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.json(err);
    });
  });

  app.post('/api/users', (req, res) => {
    db.Users.create(req.body)
        .then((rows) => {
          res.json({
            success: true,
            rowsAdded: rows,
          });
        }).catch((err) => {
      res.json({ error: err });
    });
  });
};
