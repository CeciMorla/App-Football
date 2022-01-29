const { Router } = require('express');
const fixtures = require('./fixtures.js');
const timezone = require('./timezone.js')

//const {apiPokemon,dbPokemon,allPokemon} = require('../controllers/controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/fixtures', fixtures);
router.use('/timezone', timezone)



module.exports = router;
