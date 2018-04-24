var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/landingpage.html"));
      });

      app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });

      app.get("/homepage", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/homepage.html"));
      });

      app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/addstory.html"));
      });

      app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
      });
}