
import { Router} from 'express'
import MarcasRoute from './marcas.routes';

const router = Router();


router.use('/marcas',MarcasRoute)


export default router;