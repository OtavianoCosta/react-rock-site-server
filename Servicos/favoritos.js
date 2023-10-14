const fs = require("fs")

function getTodosFavoritos () {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorID(id) {
    const camisetas = JSON.parse(fs.readFileSync("favoritos.json"))

    const camisetaFiltrada = camisetas.filter( camiseta => camiseta.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(camisetaFiltrada))
}

function insereFavorito(id){
    const camisetas = JSON.parse(fs.readFileSync("camisetas.json"))
    const camisetasFavoritas = JSON.parse(fs.readFileSync("favoritos.json"))

    const camisetaInserida = camisetas.find(camiseta => camiseta.id === id)
    const novaListaDeCamisetasFavoritas = [...camisetasFavoritas, camisetaInserida]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeCamisetasFavoritas))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorID,
    insereFavorito

}