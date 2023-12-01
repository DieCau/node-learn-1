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


router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })

})

router.get('/:id', (req,res) =>{
  const { id } = req.params;
  res.json({
    id,
    categoryId: faker.commerce.productAdjective()
  });
});

module.exports = router;
