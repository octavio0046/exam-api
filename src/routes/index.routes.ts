
import { Router} from 'express'
import MarcasRoute from './marcas.routes';
import DepartamentosRoute from './departamentos.routes';
const router = Router();


router.use('/marcas',MarcasRoute)
router.use('/departamentos',DepartamentosRoute)


export default router;