const express = require('express');
const router = express.Router();

const {getUsers, checkUser, getUser, createUser, updateUser, deleteUser} = require('../controllers/users.js');

router.get('/', getUsers);

router.post('/check', checkUser);

router.get('/:userID', getUser);

router.post('/', createUser);

router.put('/:userID', updateUser);

router.delete('/:userID', deleteUser);

module.exports = router