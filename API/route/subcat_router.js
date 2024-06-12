import express from 'express';
import url from 'url';
var router= express.Router();
import * as subcatcantroller from '../controller/subcat_controller.js';
router.post("/save",subcatcantroller.save);
router.get("/fetch",subcatcantroller.fetch);
router.patch("/update",subcatcantroller.updatecat);
router.delete("/delete",subcatcantroller.deletecat);


export default router