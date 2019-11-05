const db = require("./carsDb");

// Check if Car object exists AND has required properties
const validateCar = (req, res, next) => {
    const newCar = req.body;

    if (!Object.getOwnPropertyNames(newCar).length) {
        res.status(400).json({ errorMessage: "Please provide a new car to add to the database." })
    } else if (!newCar.VIN || !newCar.make || !newCar.model || !newCar.mileage) {
        res.status(400).json({ errorMessage: "Please provide a VIN, Make, Model, and Mileage for the new car." })
    } else next();
};

// Checks that Car ID exists in database
const validateCarId = (req, res, next) => {
    db.get(req.params.id)
        .then(car => {
            if (car.length) {
                req.car = car;
                next();
            } else {
                res.status(404).json({ errorMessage: "There is not a car with that ID in the database." })
            }
        })
        .catch(err => res.status(500).json({ error: "Failed to find car in the datatbase." }));
};

module.exports = {
    validateCar,
    validateCarId
}