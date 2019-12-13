
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_linker').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_linker').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 2},
        {recipe_id: 2, ingredient_id: 2, quantity: 2},
        {recipe_id: 1, ingredient_id: 3, quantity: 4},
        {recipe_id: 2, ingredient_id: 3, quantity: 4},
        {recipe_id: 1, ingredient_id: 4, quantity: 2},
        {recipe_id: 2, ingredient_id: 4, quantity: 2},
        {recipe_id: 1, ingredient_id: 5, quantity: 2},
        {recipe_id: 2, ingredient_id: 5, quantity: 2},
        {recipe_id: 1, ingredient_id: 6, quantity: 1},
        {recipe_id: 2, ingredient_id: 6, quantity: 1},
        {recipe_id: 1, ingredient_id: 7, quantity: 2},
        {recipe_id: 2, ingredient_id: 7, quantity: 2},
        {recipe_id: 2, ingredient_id: 8, quantity: 2},
        {recipe_id: 2, ingredient_id: 9, quantity: 2},
        {recipe_id: 1, ingredient_id: 10, quantity: 3},
        {recipe_id: 2, ingredient_id: 11, quantity: 0.5},
        {recipe_id: 2, ingredient_id: 12, quantity: 2}
      ]);
    });
};
