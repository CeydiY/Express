var express = require('express');
var router = express.Router();

/*1. Crea una aplicación Express que tenga una única ruta que devuelva un
mensaje de "Hola mundo".*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola mundo, Ceydi Cuenca' });
});

/* 2. Amplía la aplicación anterior para que tenga dos rutas: una que devuelva un
mensaje de "Hola" y otra que devuelva un mensaje de "Mundo" */
router.get('/hola', function(req, res, next) {
  res.render('index', { title: 'Holitas' });
});
router.get('/mundo', function(req, res, next) {
  res.render('index', { title: 'mundo' });
});

module.exports = router;
