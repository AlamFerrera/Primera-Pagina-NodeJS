const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 8080);
app.set('views', path.join(__dirname + '/' + 'Views'));
app.set('view engine', 'ejs');

//Middlewares

//Routes
app.use(require('./Routes/index'));

//Static files
app.use(express.static(path.join(__dirname + '/' + 'public')));

//Servidor escuchando
app.listen(app.get('port'), () => {
   // console.log("server on port " + app.get('port'));
});

