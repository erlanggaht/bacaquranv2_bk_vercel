import { Sequelize } from "sequelize";
import mysql2 from 'mysql2'

export const  dbs_konek = new Sequelize('users_admin','erlanggaht','@sumedang12',{
    host : "www.db4free.net",
    dialectModule : mysql2,
    dialect : "mysql"
}) 