const express = require('express');

const asyncHandler = require("express-async-handler")

const db = require("../data/dbConfig");



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
// GET show the list of Cars
router.get("/", asyncHandler(async (req, res, next) => {
    const cars = await db("cars")
    res.json(cars)
}))

// POST Create a car entry
router.post("/", asyncHandler(async(req, res, next) => {
    const payload = {

        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        title: req.body.title,
    }
    const [id] = await db("cars").insert(payload)
    res.json(await db("cars").where("id", id).first())
}))
//PUT Edit cars table
router.put("/:id", asyncHandler(async (req, res, next) => {
    
    const payload = {
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        title: req.body.title,
    }
    await db("cars").where("id", req.params.id).update(payload)
    res.json(await db("cars").where("id", req.params.id).first())

}))

// DELETE delete a car from DB CARS
router.delete("/:id", asyncHandler(async (req, res, next) => {
   
    await db("cars").where("id", req.params.id).del()
    res.status(204).end()

}))



module.exports = router;