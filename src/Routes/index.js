const express = require('express');
const router = express.Router();

//Rutas
router.get('/', (req,res) => {
    //const index = path.join(__dirname + '/Views/index');
    res.render('index', {title: 'Pagina Principal'});
});

router.get('/contact', (req,res) => {
    res.render('contact', {title: 'Contacto'});
});

module.exports = router;