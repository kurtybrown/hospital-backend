require('dotenv').config();

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Crear el servidor de express
const app = express();

//Configurar CORS

app.use( cors() );

// Base de Datos

dbConnection();

// mean_user
// hoJ8GN6gL9KxccZG

// Rutas
app.get( '/', (req, res) => {

  res.json({
    ok: true,
    msg: 'hola mundo'
  })

});


app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puerto ' + process.env.PORT);
})