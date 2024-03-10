const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jerin:jerin@cluster0.crsjo7n.mongodb.net/data?retryWrites=true&w=majority")
.then(()=>{console.log("worker ok")})
.catch(err=>console.log(err));
const Workerschema=new mongoose.Schema(
    {
    name:String,
    phone:Number,
    job:String,
    experience:String,
    location:String,
    image1:{
        data : Buffer,
        contentType:String,
    
    }
    

});
var Workermodel=mongoose.model("WorkerReg",Workerschema)
module.exports=Workermodel;
