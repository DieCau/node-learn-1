const express = require('express')
const { faker } = require('@faker-js/faker')


const router = express.Router()


// Aplicando faker
router.get('/', (req, res) => {
  const products = []
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    })
  }
  res.json(products);
})


// Todo lo que son rutas estaticas deben ir antes de los endpoints que son dinamicos
router.get('/filter', (req, res) =>{
  res.send('Yo soy un filter')
});


// PARAMS
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})

// Creo un producto por medio de POST
router.post('/', (req, res) => {
  // No utilizo Destructuring porque necesito todo el cuerpo
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})


module.exports = router;
