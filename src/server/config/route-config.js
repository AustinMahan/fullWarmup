(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const names = require('../routes/names');
    // *** register routes *** //
    app.use('/', routes);
    app.use('/names', names);

  };

})(module.exports);