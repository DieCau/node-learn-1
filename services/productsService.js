const { faker } = require('@faker-js/faker')

// Utilizo la CAPA DE SERVICIOS
class ProductsService {

  constructor() {
    this.products = [];
    this.generate()
  }

  generate() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
    })
  }
  }

  // (data) es la info que envia el cliente
  async create(data) {
    // Se crea el nuevo producto con una ID generado por Faker y se concatena (...data)
    // [name, price, image] los valores que faltan
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    // Insertar el newProduct en array [products]
    this.products.push(newProduct);
    // Retornamos el nuevo producto
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.products)
      }, 5000);
    })
  }

  async findOne(id) {
    return this.products.find( item => item.id === id );
  }

  async update(id, changes) {
    // Retorna la posición del producto en el array
    const index = this.products.findIndex( item => item.id === id );
    if(index === -1){
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    // Retorna la posición del producto en el array
    const index = this.products.findIndex( item => item.id === id );
    if(index === -1){
      throw new Error('product not found');
    }
    // Encontrada la posición que la elimine
    // y cuántos elementos elimine a partir de esa posición
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
