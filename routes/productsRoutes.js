const express   = require("express");
const router    = express.Router();

//function
const   { getProduct }     = require('../controllers/productsController');
const app   = express();
const port  = process.env.PORT || 3000;



router.route("/prodotti").get(getProduct)
    //example call with parameters: http://localhost:3001/api/prodotti/MATNR=...
router.route("/prodotti/:matnr").get(getProduct)




module.exports = router;