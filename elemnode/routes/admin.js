import express from 'express'
import Admin from '../controller/admin/index'
const router = express.Router()

router.get('/login', Admin.login);
//router.get('/register', Admin.register);


export default router