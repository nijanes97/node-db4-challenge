
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tble => {
        tble.increments();
        tble.string('name', 255)
            .notNullable();
    })
    .createTable('ingredients', tble => {
        tble.increments();
        tble.string('name', 255)
            .notNullable();
    })
    .createTable('ingredient_linker', tble => {
        tble.increments();
        tble.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tble.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tble.integer('quantity')
            .notNullable();
    })
    .createTable('instructions', tble => {
        tble.increments();
        tble.integer('step_number');
        tble.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tble.string('instruction', 500);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('ingredient_linker')
    .dropTableIfExists('instructions');
};
