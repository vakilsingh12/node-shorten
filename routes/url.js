const express=require('express');
const { generateUrl, getUrl } = require('../controllers/url');
const restrictToUserLogin = require("../middleware/auth");
const router=express.Router();
router.post('/url',restrictToUserLogin,generateUrl) 
router.get('/url/:shortId',restrictToUserLogin,getUrl)
module.exports=router 