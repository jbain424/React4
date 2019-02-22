const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, addOneUser, updateOneUser, deleteOneUser } = require('../db/queries/users_q.js');

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', addOneUser);
router.patch('/:id', updateOneUser);
router.delete('/:id', deleteOneUser);


module.exports = router;
