var db = require('../models');

module.exports = function(app) {
    app.post('/api/users', function(req,res){
        db.Userinformation.create(req.body).then(function(data){
            res.json(data);
        })
    })


}