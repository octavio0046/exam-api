import { Router} from 'express'
const router = Router();

import { getMarcas,create,getxId,deletM, UpdateM } from "../controllers/marcas.controller"; 

router.route('/')
.get(getMarcas)
.post(create);

router.route('/:Id')
.get(getxId)
.delete(deletM)
.put(UpdateM)
export default router;