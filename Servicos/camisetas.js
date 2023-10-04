const fs = require("fs")

function getTodasCamisetas () {
    return JSON.parse(fs.readFileSync("camisetas.json"))
}

function getCamisetaPorId(id) {
    const camisetas = JSON.parse(fs.readFileSync("camisetas.json"))
    const camisetaFiltrada = camisetas.filter( camiseta => camiseta.id === id )[0]
    return camisetaFiltrada
}

function insereCamiseta(camisetaNova) {
    const camisetas = JSON.parse(fs.readFileSync("camisetas.json"))
    const novaListaCamisetas = [ ...camisetas, camisetaNova ]

    fs.writeFileSync("camisetas.json", JSON.stringify(novaListaCamisetas))
}

function modificaCamiseta(modificacoes, id) {
    let camisetasAtuais = JSON.parse(fs.readFileSync("camisetas.json"))
    const indiceModificado = camisetasAtuais.findIndex( camiseta => camiseta.id === id)

    const conteudoMudado = { ...camisetasAtuais[indiceModificado], ...modificacoes}

    camisetasAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("camisetas.json", JSON.stringify(camisetasAtuais))

 } 

function deletaCamisetaporId(id) {
    const camisetas = JSON.parse(fs.readFileSync("camisetas.json"))

    const camisetaFiltrada = camisetas.filter( camiseta => camiseta.id !== id )
    fs.writeFileSync("camisetas.json", JSON.stringify(camisetaFiltrada))

}

module.exports = {
    getTodasCamisetas,
    getCamisetaPorId,
    insereCamiseta,
    modificaCamiseta,
    deletaCamisetaporId
    
}
