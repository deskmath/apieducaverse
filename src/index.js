const express = require('express');
const app = express();
const morgan= require('morgan');

//setting
app.set('port',process.env.PORT || 4000);
app.set('json spaces',2);


//ejecución intermedia
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use(require('./ruta/index'));
app.use('/api/lands', require('./ruta/lands'));
app.use('/api/test', require('./ruta/rutastest'));

// starting the server

app.listen(app.get('port'),()=>{
console.log(`Server on port ${4000}`);
});