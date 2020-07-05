const express = require('express');
const app = express();

const home = require('./routes/home');
const sucursales = require('./routes/sucursales');
const marcas = require('./routes/marcas');
const autos = require('./routes/autos');

app.listen(3000, () => console.log("SV corriendo"));

app.use('/', home);
app.use('/sucursales', sucursales);
app.use('/autos', autos)
app.use('/marcas', marcas)