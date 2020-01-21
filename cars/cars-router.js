const express = require('express');

const asyncHandler = require("express-async-handler")

const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/.db3'
  },
  useNullAsDefault: true
});

const router = express.Router();

// router.get('/', (req, res) => {
//     db('cars') 
//        .then(cars => {
//         res.json(cars);
//        })
//        .catch(err => {
//            console.log(err)
//            res.status(500).json({
//                error: "failed to retrieve cars"
//            })
//        })    
// })

router.get("/", asyncHandler(async (req, res, next) => {
    const cars = await db("cars")
    res.json(cars)
}))


router.post("/", asyncHandler(async(req, res, next) => {
    const payload = {
        VIN: req.body.vin,
        Make: req.body.make,
        Model: req.body.model,
        Mileage: req.body.mileage,
        Title: req.body.title,
    }
    const [id] = await db("cars").insert(payload)
    res.json(await db("cars").where("id", id).first())
}))

module.exports = router;