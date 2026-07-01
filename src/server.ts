import express from "express"
import cors from "cors"
import clientes from "./routes/clientes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/cliente", clientes)

app.listen(3000, () => {
    console.log("servidor rodando")
})

