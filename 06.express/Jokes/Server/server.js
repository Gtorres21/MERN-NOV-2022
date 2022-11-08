const express = require("express")
const app = express();
const PORT = 8000;
const DB = "jokes_DB"

// -------------MIDDLEWARE-----------------

app.use(express.json(), express.urlencoded({extended:true}));

app.get("/api/demo", (req, res) => {
    res.json({status: "all good 👍"})
})


// CONNECT to the DB using mongoose
require("./config/mongoose.config")(DB)




// modularize routes
require('./routes/jokes.routes')(app)


// Start the server


app.listen(PORT, () => console.log(`>> server up ${PORT} <<`))