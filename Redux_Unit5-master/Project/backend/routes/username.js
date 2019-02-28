const express = require('express');
const router = express.Router();
const passport = require('../auth/local')
const { getAllUsers, getOneUser, addOneUser, updateOneUser, deleteOneUser, createUser, loginUser, logoutUser, isLoggedIn } = require('../db/queries/users_q.js');

const { loginRequired } = require('../auth/helpers.js')
router.post('/new', createUser);
router.post('/login', passport.authenticate("local", {}), loginUser);
router.get('/logout', loginRequired, logoutUser);
router.get('/isLoggedIn', isLoggedIn)

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', addOneUser);
router.patch('/:id', updateOneUser);
router.delete('/:id', deleteOneUser);




module.exports = router;
