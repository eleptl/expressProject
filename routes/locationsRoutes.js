const express   = require("express");
const router    = express.Router();

const app   = express();
const port  = process.env.PORT || 3000;

//funzioni
const   { getLocation, getOneLocation }    = require('../controllers/locationsController');

//page ubicazioni -- create
router.route("/ubicazioni").get(getLocation);
//showOnce --  delete --  add
            //example call: localhost:3001/api/prodotti/2
router.route("/ubicazioni/:id").get(getOneLocation);

module.exports = router;