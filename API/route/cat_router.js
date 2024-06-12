import express from 'express';
var router= express.Router();
import * as catcantroller from '../controller/cat_controller.js';
router.post("/save",catcantroller.save);
router.get("/fetch",catcantroller.fetch);
router.patch("/update",catcantroller.updatecat);
router.delete("/delete",catcantroller.deletecat);


export default router