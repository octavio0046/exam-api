
import { Router} from 'express'
import MarcasRoute from './marcas.routes';
import DepartamentosRoute from './departamentos.routes';
import ConcesionarioRoute from './concesionario.routes';
const router = Router();


router.use('/marcas',MarcasRoute)
router.use('/departamentos',DepartamentosRoute)
router.use('/concesionario',ConcesionarioRoute)


export default router;