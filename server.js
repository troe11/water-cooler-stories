var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('./config/connection.js');
var app = express();

var PORT = 3000;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var db = require('./models')
// Routes
// // =============================================================
require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
// });