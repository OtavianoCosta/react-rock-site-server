const fs = require("fs")
const { getTodasCamisetas } = require("../Servicos/camisetas")

function getCamisetas(req, res) {
    try{
        const camisetas = getTodasCamisetas()
        res.send(camisetas) }
        catch(error){
            res.status(500)
            res.send(error.message)

        }
 }

 module.exports = {
    getCamisetas
 }