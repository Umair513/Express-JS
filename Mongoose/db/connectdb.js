import mongoose from "mongoose";

// const connectDB = (DATABASE_URL) => {
//     return mongoose.connect(DATABASE_URL)
//         .then(() => {
//             console.log("connected successfully...")
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

const connectDB = async (DATABASE_URL) => {
   try {
       await mongoose.connect(DATABASE_URL);
       console.log("Connected Successfully...")
   } catch (error) {
    console.log(error)
   }
}



export default connectDB