const express = require("express");
const { route } = require("./Routes/CategoryRoutes");
const PORT = 5005;
const app = express();
const cors = require("cors")


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
   });
app.use("/api", route)
app.listen(PORT, () =>{
    try{
        console.log("Server is running")
    }
    catch(err){
        console.log("Error occured while starting the server")
    }
})

