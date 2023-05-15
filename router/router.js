import express from "express";
import { getUsers, masukanSaran } from "../controls/users_control.js";


const router = express.Router()

router.get('/',(req,res) => {
    res.json('url server database kami path /users_saran ')
})
router.get('/users_saran',getUsers)
router.post('/tambah_saran',masukanSaran)


export default router;
