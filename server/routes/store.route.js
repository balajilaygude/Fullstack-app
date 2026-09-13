const express=require("express")
const router=express.Router()

router.get("/store",getAllStore)
router.get("/store:id",getMyStore)



module.exports=router