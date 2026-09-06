const express=require("express")
const router=express.Router()

router.get("/store",getAllStore)
router.get("/store:id",getMyStore)
router.post("/store",createStore)



module.exports=router