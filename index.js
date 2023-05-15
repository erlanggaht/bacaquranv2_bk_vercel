import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import router from "./router/router.js";
import { dbs_konek } from "./database/config.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 3004

try {
    await dbs_konek.authenticate()
    console.log('berhasil konek ke database')
} catch (error) {
    console.error('Unable to connect to the database:', error); 
}



app.use(cors({origin : true,}));



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)




app.listen(port,()=>{
    console.log(`berhasil konek di port ${port}`)
})
