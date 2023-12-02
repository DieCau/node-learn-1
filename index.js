const express = require('express')
const routerApi = require('./routes')

const { logErrors, errorHandler } = require('./middlewares/errorHandler')


const app = express()
const port = 3000

// Se utiliza este Middleware
app.use(express.json());



// ROUTES
app.get('/', (req, res) => {
  res.send(`<h1>Hola mi server en Express</h1>`)
})

app.get('/nueva-ruta', (req, res) => {
  res.send(`<h1>Hola desde nueva ruta</h1>`)
})


routerApi(app);

// MIDDLEWARES (Se colocan si o si luego de Routes)
app.use(logErrors);
app.use(errorHandler);



// LISTEN
app.listen(port, () =>{
  console.log(`Escuchando en el puerto ${port}`)
})
