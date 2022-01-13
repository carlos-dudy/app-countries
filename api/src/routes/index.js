const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesRoutes = require('./country.js')
const ActivityRoutes = require('./activity.js')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', CountriesRoutes);
router.use('/activity', ActivityRoutes)


module.exports = router;
