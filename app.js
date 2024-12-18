const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path');
require("dotenv").config();

//------------------------------------------------------------------------------
//GUI ARCHITECURE:
// make views 'static
app.use(express.static(path.join(__dirname, 'views')));
// reach to HomePage when start app 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'HomePage.html'));
});
// 404
app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});
//-----------------------------------------------------------------------------
// this routes brings us what we made in "routes". 
// IMPORTANT! in the start of the path- ".." = jump twice above / "." = jump once TO RELATIVE FOLDER (in this case into "PEROOSHPROJ")
const WordRoutes = require("./routes/word.route.js")
const WordsRoutes = require("./routes/words.route.js")
//middlewares:
app.use(express.json());
app.use(express.urlencoded({extended: false}))//to handle with URL and not just json
//mongoDB_connection: 
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const appName = process.env.DB_APPNAME;
mongoose.connect(
    "mongodb+srv://" + dbUser + ":" + dbPassword + "@" + dbCluster + "/" + dbName + "?retryWrites=true&w=majority&appName=" + appName,
)
.then(() => {
    console.log("connected to database!");
})
.catch(err => {
    console.log("connection failed!\n" + err);
});

//Routes:
app.use("/api/words",WordsRoutes)
app.use("/api/word",WordRoutes)
//---------------------------------------------------------------------------
app.listen(3000, () => {
    console.log("this server is running on port 3000")
})