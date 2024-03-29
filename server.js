var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded());

var PORT = process.env.PORT || 8083;

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});