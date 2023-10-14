const express = require("express")
const rotaCamiseta = require("./Rotas/camisetas")
const rotaFavorito = require("./Rotas/favoritos")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/camisetas', rotaCamiseta)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
