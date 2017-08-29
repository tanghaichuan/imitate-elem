import express from 'express'
import User from '../controller/user/index'
import Check from '../middlewares/check'

const router = express.Router()

router.post('/addUser', Check.checkLogin, User.addUser);
router.get('/getUserList', Check.checkLogin, User.getUserList);
router.post('/editUser', Check.checkLogin, User.editUser);
router.post('/delUserInfo', Check.checkLogin, User.delUserInfo);

export default router