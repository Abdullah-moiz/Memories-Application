




import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotnet from 'dotenv'
dotnet.config();
import myRouter from './routes/router.js'
const connectionUrl = process.env.connectionUrl;
const connectingUrl = 'mongodb://localhost:27017/MemoriesApp'
const Port = process.env.Port || 5000
const app = express();


app.use(bodyparser.json({ limit: "50mb", extended: true }))
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }))
app.use(cors())

// ^ mongoDb COnnection setup -------------- start

mongoose.connect(connectingUrl,{useNewUrlParser : true , useUnifiedTopology : true})
.then(() => console.log("database Connected successfully") )
.catch((error)=> console.log(error.message) )




// ^ mongoDb COnnection setup -------------- END


app.use('/',myRouter)

app.listen(Port ,() => {
    console.log(`server is running at http://localhost:${Port}`);
})

