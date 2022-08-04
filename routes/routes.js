import express from 'express'
import { getGas } from '../controllers/controllers.js';
import { catchErrors } from '../utils.js';
const router = express.Router()

router.get('/gas/:amount', catchErrors(getGas))

export default router;