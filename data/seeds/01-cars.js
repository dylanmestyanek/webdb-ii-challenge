exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: 123459876, Make: "Toyota", Model: "Corolla", Mileage: 123456 },
        { VIN: 987654321, Make: "Kia", Model: "Rio", Mileage: 123456, TitleStatus: "clean" },
        { VIN: 123456789, Make: "Cheverolet", Model: "Silverado", Mileage: 254000, TitleStatus: "clean" }
      ]);
    });
};
