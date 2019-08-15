const path = require('path');

module.exports = function (app) {
  app.get('/js/app.js', (req, res) => {
    res.set('Content-Type', 'application/javascript; charset=utf-8');
    res.sendFile(path.join(__dirname, '../public/js/app.js'));
  });

  app.get('/js/store.js', (req, res) => {
    res.set('Content-Type', 'application/javascript; charset=utf-8');
    res.sendFile(path.join(__dirname, '../public/js/store.js'));
  });


  app.get('/css/style.css', (req, res) => {
    res.set('Content-Type', 'text/css; charset=utf-8');
    res.sendFile(path.join(__dirname, '../public/css/style.css'));
  });

  app.get('/admin', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(path.join(__dirname, '../public/admin.html'));
  });

  // If no matching route is found default to index.html
  app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
