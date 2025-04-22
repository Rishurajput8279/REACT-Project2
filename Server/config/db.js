const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const dbConnect=async ()=>{
    try {
        await  mongoose.connect(process.env.MONGO_URL)
      
        console.log("database connected 🥹")   
    } catch (error) {
        console.log(error.message)
    }
   
}
module.exports=dbConnect;