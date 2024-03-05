/**npm run dev 
 * MIN: 46:15
*/

const express       = require("express");
const errorHandler  = require("./middleware/errorHandler");
const dotenv        = require("dotenv").config();

const app   =   express();
const port  =   process.env.PORT    ||  3000;

app.use(express.json() )
app.use("/api", require("./routes/productsRoutes"));
app.use("/api", require("./routes/locationsRoutes"))
app.use(errorHandler);

//module
const productModule     = require('./modules/productModule');
const locationModule    = require('./modules/locationsModule');

app.listen(port, ()=>{
    console.log('server running on port ' +  port)
});

