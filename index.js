const express = require('express'); //
const routes = require('./routes')
const path = require('path');

// Crea una ap de express
const app = express();

//Habilitar PUG
app.set('view engine', 'pug');

//Carga de archivos estaticos
app.use(express.static('public'));

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'))

//Uso de rutas
app.use('/', routes());

app.listen(8000);