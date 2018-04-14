var db = require('models');

module.exports = function(app) {
    app.post('/api/stories', function(req,res){
        db.StorieTable.create(req.body).then(function(storie){
            res.json(storie);
        })
    })
}