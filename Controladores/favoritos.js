const { getTodosFavoritos, insereFavorito, deletaFavoritoPorID } = require("../Servicos/favoritos")


function getFavoritos(req, res) {
    try {
        const camisetas = getTodosFavoritos()
        res.send(camisetas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postFavorito(req, res) {
    try{
        const id = req.params.id;
        insereFavorito(id)
        res.status(201)
        res.send("Favorito inserida com Sucesso!!")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
 }

 function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaFavoritoPorID(id)
            res.send("Favorito deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}



module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito,
}