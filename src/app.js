const SwaggerExpress = require('swagger-express-mw');
const express = require('express');
const app = express();
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

const swaggerUi = express.static(pathToSwaggerUi)

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 3000;
  app.listen(port);

  app.use('/', swaggerUi);
});