
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, 
          vin: 'JNKCV61E49M014581', 
          Make: 'Toyota',
          Model: 'Celica',
          Mileage: 1200,
          Title: 'clean',
          Automatic: true,
          Manual: false
         },
        { id: 2, 
          vin: '3D4GG47B09T581222',
          Make: 'BMW',
          Model: 'R5',
          Mileage: 100,
          Title: 'clean',
          Automatic: false,
          Manual: true
        },
        { id: 3, 
          vin: '1B4GP25321B157282',
          Make: 'Mercedes',
          Model: 'LS',
          Mileage: 10,
          Title: 'clean',
          Automatic: true,
          Manual: false  
        }
      ]);
    });
};
