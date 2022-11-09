const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 8000;
const DB = "products_db"



// ******* MiddleWare *****************************************************
app.use(cors(),express.json(), express.urlencoded({extended:true}));


// Connect to DB using MONGOOSE
require('./config/mongoose.config')(DB)


// Modularize ROUTES
require('./routes/product.routes')(app)



// Start Server ************************************************
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))