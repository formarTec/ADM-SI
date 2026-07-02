import { Router } from "express";
import router from "./clientes";
import { prisma } from "../prisma";




const route = Router()

route.get("/", async (req, res) => {

    res.json({
        clientes: await prisma.cliente.count(),
        produtos: await prisma.produto.count(),
        fornecedores: await prisma.fornecedor.count(),
        pedidos: await prisma.pedido.count()
    })
})

export default router
