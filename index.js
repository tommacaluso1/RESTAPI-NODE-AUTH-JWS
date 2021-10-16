const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
// import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
dotenv.config();


//conect to DB
mongoose.connect(process.env.DB_CONNECT,
 {useNewUrlParser: true},
 () => console.log("connected to db!") )

//middleware 
app.use(express.json());

//Route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);






app.listen(5000, () => console.log("server running"))
