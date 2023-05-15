import { UserSaran } from "../model/model.js"

export const getUsers = async(req,res) => {
    try {
        const user = await UserSaran.findAll({
            attributes : ['id','nama_depan','nama_belakang','email','pesan_masukan']
          })
        if(user.length === 0)return res.status(400).json('tidak ada data')
         res.status(200).json(user)
    } catch (error) {
        console.log({KamiError : "ada kesalahan diserver kita.silahkan coba lagi"})
    }
}

export const masukanSaran = async (req,res) =>  {
    try {
         const user_masukan = await UserSaran.create({
            nama_depan : req.body.nama_depan,
            nama_belakang : req.body.nama_belakang,
            email : req.body.email,
            tanggal_kirim : req.body.tanggal_kirim,
            pesan_masukan : req.body.pesan_masukan  
         })
         if(!user_masukan) return res.status(400).json('ada kesalahan saat memasukan saran. cek form kembali')
         return res.status(201).json('terima kasih telah sudah membarikan masukan.')
    } catch (error) {
        console.log({KamiError : "ada kesalahan diserver kita.silahkan coba lagi"})
    }
}