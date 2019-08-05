// Import in our db models
// const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    app.get('/api/guides', function(req, res){
        console.log("guides route hit");
        res.send("ok");
    });
};
