const { Router } = require("express")
const { getCamisetas, getCamiseta, postCamiseta, patchCamiseta, deleteCamiseta } = require("../Controladores/casmisetas")
const { apagaCamiseta } = require("../Servicos/camisetas")

const router = Router()

router.get("/", getCamisetas ) 

router.get("/:id", getCamiseta) 

router.post("/", postCamiseta)

router.patch("/:id", patchCamiseta)

router.delete("/:id", deleteCamiseta)

    module.exports = router