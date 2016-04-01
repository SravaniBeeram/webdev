module.exports = function(app,uuid){
    var userModel = require("./models/user.model.js")(uuid,db);
    var formModel = require("./models/form.model.js")(uuid,db);
    var fieldModel = require("./models/field.model.js")(uuid,formModel,db);

    var userService = require("./services/user.service.server.js")(app,userModel);
    var formService = require("./services/form.service.server.js")(app,formModel,userModel);
    var fieldService = require("./services/field.service.server.js")(app,formModel,fieldModel);
};