var db = require('../models');

module.exports = function(app) {
    app.post('/api/stories', function(req,res){
        db.StorieTable.create(req.body).then(function(storie){
            res.json(storie);
        })
    });

    app.get('/api/stories', function(req,res){
        db.StorieTable.findAll({}).then(function(stories){
            res.json(stories);
        })
    });

    app.get("/api/stories/:category", function(req, res) {
        console.log(req.params.category);
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.StorieTable.findAll({
          where: {
            work_id1: req.params.category
          } 
        }).then(function(dbAuthor) {
          res.json(dbAuthor);
        });
      });
}