const express = require('express');
const app = express();

//Asignando puerto del servidor
app.set('port', 8080);


//Servidor escuchando
app.listen(app.get('port'), () => {
    console.log("server on port " + app.get('port'));
});

