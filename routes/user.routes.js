import {Router} from 'express'
import UserController from '../src/controllers/user.controller.js'
const routerUser = Router()

const userController = new UserController();

// router.get('/', (req, res) => res.send('Holis'));
routerUser.get('/', userController.index)
routerUser.get('/:id', userController.show)
routerUser.post('/', userController.create)
routerUser.delete('/:id', userController.destroy)
routerUser.put('/:id', userController.update)
routerUser.delete('/:id', userController.destroy)


export default routerUser;