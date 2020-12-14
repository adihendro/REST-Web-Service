'use strict';

module.exports = function(app){
    var webservice = require("./controller");

    app.route('/dbb')
        .get(webservice.index);

    app.route('/db')
        .get(webservice.index);

    app.route('/games')
        .post(webservice.addGames);
}