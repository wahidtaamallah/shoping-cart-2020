const express = require("express");

const connectDB = require("./config/connectDB");

const app = express();

const authRouter = require("./routes/auth");

//middlewares
app.use(express.json());

//start the server
connectDB();


//routes
app.use("/api/auth" ,authRouter);
//lunch the server
const port = process.env.PORT || 5000;
app.listen(port ,(err) => {
    err ? co0nsole.log(err) : console.log(`The Server is Running on port ${port} `) 
});



