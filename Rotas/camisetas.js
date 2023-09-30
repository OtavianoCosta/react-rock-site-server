const { Router } = require("express")
const { getCamisetas } = require("../Controladores/casmisetas")

const router = Router()

router.get("/", getCamisetas 
   
     ) 
router.post("/", (req, res) => {
    res.send("Voce fez um POST")
})

router.patch("/", (req, res) => {
    res.send("Voce fez um PATCH")
})

router.delete("/", (req, res) => {
    res.send("Voce fez um DELETE")
})

    module.exports = router