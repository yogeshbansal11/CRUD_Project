const express = require('express');
const { register, save, deleteUser, updateUser } = require('../Controller/Usercontroller');
const router = express.Router();

router.get('/findAll',register);
router.post('/save',save);
router.delete('/delete/:id',deleteUser);
router.patch('/update',updateUser);

module.exports = router;