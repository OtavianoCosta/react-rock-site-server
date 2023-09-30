const fs = require("fs")

function getTodasCamisetas () {
    return JSON.parse(fs.readFileSync("camisetas.json"))
}

module.exports = {
    getTodasCamisetas
}