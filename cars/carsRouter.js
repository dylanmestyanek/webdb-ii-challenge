const router = require('express').Router();

const db = require("./carsDb");

// GET - Retrieve all cars
router.get("/", (req, res) => {
    db.get()
        .then(cars => res.json(cars))
        .catch(err => res.status(500).json({ error: "Failed to get cars data." }))
})

// GET - Retrieve car by ID
router.get("/:id", (req, res) => {
    db.get(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(500).json({ error: "Failed to get car data." }))
})

// POST - Add new car
router.post("/", (req, res) => {
    db.insert(req.body)
        .then(car => res.status(201).json(car))
        .catch(err => res.status(500).json({ error: "Failed to add car to the database." }))
}) 

// PUT - Update car
router.put("/:id", (req, res) => {
    db.update(req.params.id, req.body)
        .then(updated => res.status(201).json(updated))
        .catch(err => res.status(500).json({ error: "Failed to update car data." }))
})

// DELETE - Remove car by ID
router.delete("/:id", (req, res) => {
    db.remove(req.params.id)
        .then(deleted => res.json(deleted))
        .catch(err => res.status(500).json({ error: "Failed to remove car from database." }))
})

module.exports = router;