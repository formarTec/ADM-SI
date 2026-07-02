import { Router } from "express";
import { prisma } from "../prisma";



const router = Router();


router.get("/", async (req, res) => {
    res.json(await prisma.pedido.findMany({
        include: {
            cliente: true
        }
    }))
})

router.post("/", async (req, res) => {

    const pedido = await prisma.pedido.create({
        data: req.body
    })

    res.json(pedido)

})

export default router