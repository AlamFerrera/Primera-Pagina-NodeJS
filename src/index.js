const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 8080);
app.set('views', path.join(__dirname + '/' + 'Views'));
app.set('view engine', 'ejs');

//Middlewares

//Rutas
app.get('/', (req,res) => {
    //const index = path.join(__dirname + '/Views/index');
    res.render('index');
});

//Static files

//Servidor escuchando
app.listen(app.get('port'), () => {
    console.log("server on port " + app.get('port'));
});

