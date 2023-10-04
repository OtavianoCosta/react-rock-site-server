const express = require("express")
const rotaCamiseta = require("./Rotas/camisetas")
const app = express()
app.use(express.json())

app.use('/camisetas', rotaCamiseta)

const port = 8000

app.listen(port, () => {
    console.log('Escutando a porta ${port}')
})