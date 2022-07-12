const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 
const { getPokemons } = require('../controllers/getPokemons');
const { getPokemonsById }= require('../controllers/getPokemonsById');
const { getPokemonsTypes }= require('../controllers/getPokemonsTypes');
const { postPokemons }= require('../controllers/postPokemons');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// Traemos la logica:


// Creando Rutas:
router.get('/pokemons', getPokemons);
router.get('/pokemons/:id', getPokemonsById);
router.get('/types', getPokemonsTypes);
router.post('/pokemons', postPokemons);




module.exports = router;
