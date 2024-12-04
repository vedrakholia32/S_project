import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { connectDB } from "./utils/db.js"
import userRoutes from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"
import messageRoute from "./routes/message.route.js"
dotenv.config()

const app =express()

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}))
const corsOptions = {
    origin: process.env.URL,
    credentials: true
}
app.use(cors(corsOptions));


app.use("/api/v1/user", userRoutes)
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);



app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log("Server is listening ");
    
})