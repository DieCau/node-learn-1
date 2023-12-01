const express = require('express');

const productsRouter = require('./productsRouter')
const categoriesRouter = require('./categoriesRouter')
const usersRouter = require('./usersRouter')

function routerApi(app) {
  // Crear un route global
  const router = express.Router()
  app.use('/api/v1', router);

  // Aplico el Router creado a cada endpoint
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi
