const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 3000;
  app.listen(port);

  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerExpress.runner.swagger));
});