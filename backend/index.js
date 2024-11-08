const route = require("./routes/route")

let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
let app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/News_nexus").then(()=>{
    console.log("Connected to server")
}).catch((err)=>{
    console.log(err)
})

app.use("/",route)

app.listen(6969)