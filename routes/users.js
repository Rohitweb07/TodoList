const express=require('express');
const router=express.Router();
const userController=require('../controllers/users_controller');


router.get('/',userController.header);

module.exports=router;