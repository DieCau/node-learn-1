const express = require('express')

const routerApi = require('./routes')

const app = express()
const port = 3000

// MIDDLEWARE
app.use(express.json());



// Routes
app.get('/', (req, res) => {
  res.send(`<h1>Hola mi server en Express</h1>`)
})

app.get('/nueva-ruta', (req, res) => {
  res.send(`<h1>Hola desde nueva ruta</h1>`)
})


routerApi(app);


// Listen
app.listen(port, () =>{
  console.log(`Escuchando en el puerto ${port}`)
})
