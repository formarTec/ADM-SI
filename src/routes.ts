import Router from "express"
import clientes from "./routes/clientes"
import produtos from "./routes/produtos"
import fornecedores from "./routes/fornecedor"
import compras from "./routes/compra"
import dashboard from "./routes/dashboard"
import pedidos from "./routes/pedidos"
import usuarios from "./routes/usuario"
import estoque from "./routes/estoque"


const routes = Router()

routes.use("/cliente", clientes)
routes.use("/produto", produtos)
routes.use("/fornecedores", fornecedores)
routes.use("/compras", compras)
routes.use("/dashboard", dashboard)
routes.use("/pedidos", pedidos)
routes.use("/usuarios", usuarios)
routes.use("/estoque", estoque)

export default routes