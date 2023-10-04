const fs = require("fs")
const { getTodasCamisetas, getCamisetaPorId, insereCamiseta, modificaCamiseta, deletaCamisetaporId } = require("../Servicos/camisetas")

function getCamisetas(req, res) {
    try{
        const camisetas = getTodasCamisetas()
        res.send(camisetas) }
        catch(error){
            res.status(500)
            res.send(error.message)

        }
 }

 function getCamiseta(req, res) {
    try{
        const id = req.params.id
        const camiseta = getCamisetaPorId(id)
        res.send(camiseta) }
        catch(error){
            res.status(500)
            res.send(error.message)

        }
 }

 function postCamiseta(req, res) {
    try{
        const camisetaNova = req.body;
        insereCamiseta(camisetaNova)
        res.status(201)
        res.send("Camiseta inserida com Sucesso!!")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
 }

 function patchCamiseta(req, res) {
    try{
        const id = req.params.id
        const body = req.body

        modificaCamiseta(body, id)
        res.send("item modificado com Sucesso!!")
    } catch{
        res.status(500)
        res.send(error.message)
    }
 }

 function deleteCamiseta(req, res) {
    try{
        const id = req.params.id
        deletaCamisetaporId(id)
        res.send("Camiseta deletada com Sucesso!!")
    } catch{
        res.status(500)
        res.send(error.message)
    }
 }


 module.exports = {
    getCamisetas,
    getCamiseta,
    postCamiseta,
    patchCamiseta,
    deleteCamiseta

 }
