import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()
const db = new PrismaClient()

app.use(express.json())

app.get("/",async (req,res)=>{
    const id = req.body.id;
    try {
        const data = await db.user.findFirst({
            where:{
                id
            }
        })

        res.json("username" + data?.username)
    } catch (error) {
        res.json("Something went wrong")
    }
})

app.post("/",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try {
        const data = await db.user.create({
            data:{
                username,
                password
            }
       })

       res.json("id:" + data.id)
    } catch (error) {
        res.json("Something went wrong !")
    }
})

app.listen(3000)