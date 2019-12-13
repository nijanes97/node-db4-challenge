
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Chicken Thighs (boneless)'},
        {name: 'Cups Lentils'},
        {name: 'Cups Chicken Stock'},
        {name: 'Cups Water'},
        {name: 'Carrots'},
        {name: 'Celery'},
        {name: 'Yellow Onion'},
        {name: 'Tsp Ground Cumin'},
        {name: 'Bay Leaves'},
        {name: 'Tsp Oregano'},
        {name: 'Tomatoes'},
        {name: 'Tsp Tomato Paste'}
      ]);
    });
};
