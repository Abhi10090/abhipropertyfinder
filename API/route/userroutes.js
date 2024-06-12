import express from 'express';
import url from 'url';
const router=express.Router();
import * as usercontroler from '../controller/usercontroller.js'
router.post("/save",usercontroler.save);
router.post("/login",usercontroler.login);
router.get("/fetch",usercontroler.fetch);
router.patch("/update",usercontroler.updateuser);
 router.delete("/delete",usercontroler.deleteuser);
export default router