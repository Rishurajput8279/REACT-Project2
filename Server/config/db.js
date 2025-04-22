const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const dbConnect=async ()=>{
    try {
        await  mongoose.connect("mongodb+srv://Rishurajput8279:1234@cluster0.lvyzo4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0MONGO_URL=mongodb+srv://Rishurajput8279:1234@cluster0.lvyzo4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      
        console.log("database connected 🥹")   
    } catch (error) {
        console.log(error.message)
    }
   
}
module.exports=dbConnect;
