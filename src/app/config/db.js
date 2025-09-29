

// import mongoose from "mongoose";

// export async function connect() {
//   try {
//     mongoose.connect(process.env.MONGO_URI);
//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//     });

//     connection.on("error", (err) => {
//       console.log(
//         "MongoDB connection error. Please make sure MongoDB is running. " + err
//       );
//       process.exit();
//     });
//   } catch (error) {
//     console.log("Something goes wrong!");
//     console.log(error);
//   }
// }


import mysql from 'mysql2/promise';

export async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',           
      password: '',           
      database: 'encoderbytes',
      port: 3306              
    });

    console.log('MySQL connected successfully');
    return connection;
  } catch (error) {
    console.error('MySQL connection failed:', error.message);
  }
}
