import express from 'express';
//import { deleteUser } from '../../client/src/service/api.js';
import { addUser, getUsers, getUser, editUser,deleteUser } from '../controller/user_controller.js';
const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id/', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;
