//Autor: Vasquez Miguel, Alexandra Ivana

//importa las variables de entorno
require('dotenv').config();

//importa el servidor
const app = require('./server');

//conecta a la base de datos
require('./database'); 

//pone en escucha al servidor en el puerto seleccionado
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})