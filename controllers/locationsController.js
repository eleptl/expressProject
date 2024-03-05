const asyncHandler = require('express-async-handler');

//module
const locationModule = require('../modules/locationsModule');

//lettura file
const fs = require('fs');

const bodyParser = require('body-parser');

const dataUbicazioni = require('../data/dataLocations.json');
const { isDeepStrictEqual } = require('util');
const { fileURLToPath } = require('url');
const nodemon = require('nodemon');
const { stringify } = require('querystring');
const { Console } = require('console');
const { isMainThread } = require('worker_threads');

////////////////////////////////----GUARDARE COME PUSHARE SOLO GLI ELEMENTI CHE HANNO MATNR === A QUELLO RICHIESTO NELLA CHIAMATA
const getLocation = asyncHandler(async (req, res) => {
    const lgpla = req.params.LGPLA;
    console.log("your requesed locations with LGPLA = " + lgpla);
    console.log('passo1')

    //readFile
    fs.readFile('../exProject/data/dataLocations.json', 'utf8', (err, data) => {
        if (err) {
            console.log('passo2')
            console.error('Error reading the file: ', err);
            return res.status(501).json({ error: 'Server error' });
        }
        try {
            console.log('passo3')
            const ubicazioni = data;
            console.log('passo3.1')
            console.log('UBICAZIONI', ubicazioni)

            //i valori però me li da indefiniti
            console.log('prova stampa matnr:', ubicazioni[1].MATNR)
            return res.status(200).json(ubicazioni);
        } catch {
            console.error('Error parsing JSON: ', err);
            return res.status(501).json({ error: 'Invalid JSON format' });
        }
    })
});

//non funziona con i parametro
const getOneLocation = asyncHandler(async (req, res) => {
    console.log('passo00')
    const ubicazioniF = data;

    console.log('apsso1')

    if (!ubicazioniF) {
        res.status(404);
        throw new Error('Ubicazione non trovata')
    }
    console.log("dataUbicazioni: ", ubicazioniF)

    res.status(200).json(ubicazioniF);

});




module.exports = { getLocation, getOneLocation };

/*
funzioni aggiuntive -- ora non mi servono

//////////////////////////////////////////////////////////////////////////////////////////////////////
//@desc     Get All Locations
//@route    GET api/ubicazioni
//@access   public
const getLocations = async (req, res) => {

    fs.readFile('../exProject/data/dataLocations.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return res.status(500).json({ error: 'Server error' });
        }
        try {
            console.log(data);

            for (let i = 0; i < notesUb.length; i++) {
                var jsonUbic = notesUb[i];
                var itemUbic = new locationModule(jsonUbic.LGPLA, jsonUbic.MATNR, jsonUbic.MAKTX, jsonUbic.MEINS, jsonUbic.VERME, jsonUbic.BESTQ);
                console.log(itemUbic);
                ubicazioni.push(itemUbic);
            }
            res.json(ubicazioni);4
            res.status(200).json( {message: "Get all Locations" });
        } catch {
            console.error('Error parsing JSON: ', err);
            return res.status(500).json({ error: 'Invalid JSON format' });
        }
    })
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

//@desc     Create a Location
//@route    POST api/ubicazioni
//@access   public
const createLocation = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { LGPLA, MATNR, MAKTX, MEINS, VERME, BESTQ } = req.body;
    if (!LGPLA || !MATNR || !MEINS || !VERME || !BESTQ || !MAKTX) {
        res.status(400);
        throw new Error("The fields are mandatory");
    }
    res.status(201).json({ message: "Create a Location" });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////


//@desc     Get single Location 
//@route    GET /ubicazioni/:MATNR
//@access   public



//////////////////////////////////////////////////////////////////////////////////////////////////////
//@desc     Delete single Location 
//@route    GET /ubicazioni/:MATNR
//@access   public
const deleteLocation = asyncHandler(async (req, res) => {
    const matnr = req.params.MATNR;
    res.status(200).json({ message: 'DELETE' });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
//@desc     Add Location
//@route    PUT /ubicazioni/:MATNR
//@access   public
const putLocation = asyncHandler(async (req, res) => {
    const matnr = req.params.MATNR;
    res.status(200).json({ message: 'Put location' });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

*/