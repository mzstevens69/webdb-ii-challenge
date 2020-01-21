
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {

    tbl.increments('id');


    tbl.integer('VIN', 128)       
        .unique();
        

    tbl.string('make', 128)
        .notNullable();
        

    tbl.string('model', 128)
        .notNullable();
        

    tbl.integer('mileage', 128)
        .notNullable();

    tbl.string('title ', 128)
        
    

    tbl.boolean('automatic').defaultTo(false)

    tbl.boolean('manual').defaultTo(false)


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
