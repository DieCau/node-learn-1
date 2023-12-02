const express = require('express')
const router = express.Router()

const { faker } = require('@faker-js/faker')

router.get('/', (req, res) => {
  res.json([
    {
      category: faker.commerce.productAdjective()
    },
    {
      category: faker.commerce.productAdjective()
    }
  ]);
});

 // OBTENER UN PRODUCTO POR MEDIO DE SU ID CON RUTA COMPLEJA
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })

})
// GET - OBTENER UN PRODUCTO POR MEDIO DE SU ID
router.get('/:id', (req,res) =>{
  const { id } = req.params;
  res.json({
    id,
    categoryId: faker.commerce.productAdjective()
  });
});


// POST CATEGORY
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})


// PUT
router.put('/:id', (req,res) =>{
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'deleted',
    data: body,
    id,
  });
});


// DELETE
router.delete('/:id', (req,res) =>{
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  });
});




module.exports = router;
