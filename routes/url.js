const express=require('express');
const { generateUrl, getUrl } = require('../controllers/url');
const {restrictToUserLogin,restrictTo} = require("../middleware/auth");
const router=express.Router();
router.post('/url',restrictToUserLogin,restrictTo(['Admin']),generateUrl) 
router.get('/url/:shortId',restrictToUserLogin,restrictTo(['Normal',"Admin"]),getUrl)
module.exports=router 