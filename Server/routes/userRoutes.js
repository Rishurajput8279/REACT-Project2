const express=require('express')
const usercontroller=require('../controller/userController.js')
const router=express.Router()
router.get('/users',usercontroller.getAllUser);
router.get('/user/:email',usercontroller.getUser)
router.post('/adduser',usercontroller.createUser)
router.put('/updateuser/:email',usercontroller.editUser)
router.delete('/removeuser/:email', usercontroller.deleteUser);
module.exports=router
