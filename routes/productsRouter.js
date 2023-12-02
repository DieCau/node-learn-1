const express = require('express')

const ProductsService = require('../services/productsService')

const router = express.Router()

const service = new ProductsService();


// Aplicando faker
router.get('/', async (req, res) => {
  const products = await service.find();

  res.json(products);
})


// Todo lo que son rutas estaticas deben ir antes de los endpoints que son dinamicos
router.get('/filter', (req, res) =>{
  res.send('Yo soy un filter')
});


// PARAMS
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
})


// POST
// Creo un producto por medio de POST
router.post('/', async (req, res) => {
  // No utilizo Destructuring porque necesito todo el cuerpo
  const body = req.body;
  // Almacenar en newProduct y utilizar el servicio CREATE. Envio el cuerpo (body)
  const newProduct = await service.create(body);
  // Añadir status 201 para saber que se creo un producto
  res.status(201).json({
    newProduct,
    message: 'Product created'
  });
})


// PUT
// Actualizar un producto por medio de PUT (envio TODOS los datos a actualizar)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  // No utilizo Destructuring porque necesito todo el cuerpo
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  })
});


// PATCH
// Actualizar parcialmente un producto por medio de PATCH (envio SOLO el dato a actualizar)
router.patch('/:id', async (req, res) => {
  try {

    const { id } = req.params;
    // No utilizo Destructuring porque necesito todo el cuerpo
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);

  } catch (error) {

    res.status(404).json({
      message: error.message
    })

  }
});


// DELETE
// Borrar un producto
router.delete('/:id', async (req, res) => {
  // Envio solo el Id
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports = router;
