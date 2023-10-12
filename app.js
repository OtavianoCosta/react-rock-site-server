const express = require("express")
const rotaCamiseta = require("./Rotas/camisetas")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/camisetas', rotaCamiseta)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
