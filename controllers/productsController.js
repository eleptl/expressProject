const asyncHandler = require('express-async-handler');

//module
const Product = require('../modules/productModule');

//lettura file
const fs = require('fs');
const express   = require("express");
//const app   = express();
//app.use(bodyParser.json());
const bodyParser = require('body-parser');



const dataProdotti = require('../data/dataProducts.json');
const { isDeepStrictEqual } = require('util');
const { fileURLToPath } = require('url');
const nodemon = require('nodemon');
const { stringify } = require('querystring');
const { Console } = require('console');
const { isMainThread } = require('worker_threads');



//@desc     Get single Product 
//@route    GET /prodotti/:MATNR
//@access   public
const getProduct = asyncHandler(async (req, res) => {
    const matnr = req.params.MATNR;
    console.log("your requesed locations with MATNR = " + matnr);

    //readFile
    fs.readFile('../exProject/data/dataProducts.json', 'utf8', (err, data) => {
        console.log('DATA: ',(data) );
        
        if (err) {
            console.error('Error reading the file: ', err);
            return res.status(500).json({ error: 'Server error' });
        }
        try {
            const   prodotti    = JSON.parse(data);
            var     prodArray   = []

            console.log(prodotti)
            
            for(let i = 0; i < prodotti.length; i++){
                var singleItem  = prodotti[i]
                //var item        = new Product(singleItem.MATNR, singleItem.LGORT, singleItem.LGPLA, singleItem.MEINS, singleItem.VERME, singleItem.BESTQ)
                console.log('ITEM: ', item )
                prodArray.push(item)
            }
            console.log('item n: ', i , ' = ', item)
            res.status(200).json(prodArray)
            //res.status(200).json(prodotti) 
            //res.status(200).json(prodotti[1].MATNR)

        } catch {
            console.error('Error parsing JSON: ', err);
            return res.status(500).json({ error: 'Invalid JSON format' });
        }
    })
});



module.exports = { getProduct};

/*
funzioni aggiuntive -- ora non mi servono

//////////////////////////////////////////////////////////////////////////////////////////////////////
//prova ciclo
            
            const prodotti = data;
            console.log('PRODOTTI',prodotti)


            const i = 8
            const item = new productModule(prodotti[i])
            
            console.log('itemProdotti: ', item)            
            //i valori però me li da indefiniti
            console.log('aaPROVA:', prodotti[1].MATNR)
            return res.status(200).json(prodotti);
            
//////////////////////////////////////////////////////////////////////////////////////////////////////


//@desc     Get All Products
//@route    GET api/prodotti
//@access   public
const getProducts = asyncHandler(async (req, res) => {
    console.log('Get All Products');

    fs.readFile('../exProject/data/dataProducts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err)
            return res.status(500).json({ error: 'Server error' });
        }
        try {
            console.log(data);
            const noteProd = JSON.parse(data);
            var prodotti = [];

            for (let i; i < noteProd.length; i++) {
                var jsonProd = noteProd[i];
                var itemProd = new productModule(jsonProd.MATNR, jsonProd.LGORT, jsonProd.LGPLA, jsonProd.VERME, jsonProd.MEINS, jsonProd.BESTQ);
                console.log(itemProd);
                prodotti.push(itemProd);
            }
            res.json(itemProd);
        } catch {
            console.error('Error parsing JSON: ', err);
            return res.status(500).json({ error: 'Invalid JSON fromat' });
        }
    })

    //res.status(200).json( {message: "Get all Products" });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//@desc     Create a Products
//@route    POST api/prodotti
//@access   public
const createProduct = asyncHandler(async (req, res) => {
    console.log('The request body is:', req.body);
    const { MATNR, LGORT, LGPLA, BESTQ, VERME, MEINS } = req.body;
    if (!MATNR || !LGORT || !LGPLA || !BESTQ || !VERME || !MEINS) {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    res.status(201).json({ message: "Create a Product" });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

//@desc     Delete single Product 
//@route    GET /prodotti/:LGORT/:LGPLA
//@access   public
const deleteProduct = asyncHandler(async (req, res) => {
    const matnr = req.params;
    res.status(200).json({ message: 'DELETE' });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

//@desc     Add Product
//@route    PUT /prodotti/:LGORT/:LGPLA
//@access   public
const putProduct = asyncHandler(async (req, res) => {
    const lgort = req.params.LGORT;
    const lgpla = req.params.LGPLA;
    res.status(200).json({ message: 'Put Product' });
});*/