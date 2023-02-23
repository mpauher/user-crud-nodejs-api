// import {createPool} from 'mysql2/promise'
import dotenv from 'dotenv';
dotenv.config({path : '.env'});

// export const database = createPool({
//   host : process.env.DB_HOST,
//   user : process.env.DB_USER,
//   password : process.env.DB_PASSWORD,
//   port : process.env.DB_PORT,
//   database : process.env.DB_NAME
// })

import Sequelize from 'sequelize';

// export const sequelize = new Sequelize({
//     host: 'localhost',
//     dialect: 'mysql',
//     user: "root",
//     password: "",
//     port: 3306,
//     database: "agenda"
//   });
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
     {
       host: process.env.DB_HOST,
       dialect: 'mysql'
     }
   );

   try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }