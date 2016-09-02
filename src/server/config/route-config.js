(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const contacts = require('../routes/contacts');
    // *** register routes *** //
    app.use('/', routes);
    app.use('/contacts', contacts);
  };

})(module.exports);
