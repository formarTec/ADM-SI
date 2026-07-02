import { Router } from "express";
import { prisma } from "../prisma";



const router = Router();


router.get("/", async (req, res) => {
    res.json(await prisma.fornecedor.findMany())
})

router.post("/", async (req, res) => { 
    
    const fornecedor = await prisma.fornecedor.create({
        data: req.body
    }) 

    res.json(fornecedor)

})

export default router