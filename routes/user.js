const express=require('express');
const { handleUsersignup,handleUserlogin } = require('../controllers/user');
const router=express.Router();

router.post('/register',handleUsersignup)
router.post('/login',handleUserlogin)

module.exports=router