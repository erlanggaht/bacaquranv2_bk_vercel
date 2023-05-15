import {  DataTypes } from "sequelize";
import { dbs_konek } from "../database/config.js";

 export const UserSaran = dbs_konek.define('users_saran',{
    nama_depan : {
        type : DataTypes.STRING,
        allowNull : false
    },
    nama_belakang : {
        type : DataTypes.STRING,
    },
    email : {
        type : DataTypes.STRING
    },
    tanggal_kirim : {
        type : DataTypes.DATE
    },
    pesan_masukan : {
        type : DataTypes.STRING
    }
},{freezeTableName : false})  





// (async () => {
//     await UserSaran.sync()
// })()