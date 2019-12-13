
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, recipe_id: 1, instruction: 'Chop onions, celery, and carrots into 1/2 inch pieces.'},
        {step_number: 2, recipe_id: 1, instruction: 'Season chicken thighs with salt and pepper.'},
        {step_number: 3, recipe_id: 1, instruction: 'Sear chicken thighs in pot with olive oil until golden brown.'},
        {step_number: 4, recipe_id: 1, instruction: 'Remove chicken thighs from pot and add onion.'},
        {step_number: 5, recipe_id: 1, instruction: 'Sautee onions until slightly translucent.'},
        {step_number: 6, recipe_id: 1, instruction: 'Add carrots and celery and sautee for a minute'},
        {step_number: 7, recipe_id: 1, instruction: 'Add dried oregano and sautee until fragrent'},
        {step_number: 8, recipe_id: 1, instruction: 'Pour in chicken stock and water'},
        {step_number: 9, recipe_id: 1, instruction: 'Stir and let sit until almost boiling'},
        {step_number: 10, recipe_id: 1, instruction: 'Chop chicken thighs, they do not have to be done, and add to pot'},
        {step_number: 11, recipe_id: 1, instruction: 'Lower heat and let the pot simmer.'},
        {step_number: 12, recipe_id: 1, instruction: 'Simmer until chicken is cooked and vegetables are soft'},
        {step_number: 13, recipe_id: 1, instruction: 'Season to taste and serve'},
        {step_number: 1, recipe_id: 2, instruction: 'Chop onions, celery, tomatoes, and carrots into 1/2 inch pieces.'},
        {step_number: 2, recipe_id: 2, instruction: 'Sautee onions until slightly translucent.'},
        {step_number: 3, recipe_id: 2, instruction: 'Add carrots and celery and sautee for a minute'},
        {step_number: 4, recipe_id: 2, instruction: 'Add lentils and tomato paste and sutee for 30 seconds'},
        {step_number: 5, recipe_id: 2, instruction: 'Pour in chicken stock and water'},
        {step_number: 6, recipe_id: 2, instruction: 'Add cumin, tomatoes, and bay leaves'},
        {step_number: 7, recipe_id: 2, instruction: 'Stir and let sit until almost boiling'},
        {step_number: 8, recipe_id: 2, instruction: 'Lower heat and let the pot simmer.'},
        {step_number: 9, recipe_id: 2, instruction: 'Simmer until lentils are cooken and vegetables are soft'},
        {step_number: 10, recipe_id: 2, instruction: 'Remove bay leaves season to taste and serve.'}
      ]);
    });
};
