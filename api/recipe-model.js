const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes');
};

function getRecipe(id) {
    return db('recipes')
        .where({ id })
}

function getShoppingList(id) {
    return db('ingredient_linker')
        .innerJoin('ingredients', 'ingredient_linker.ingredient_id', 'ingredients.id')
        .select('ingredients.name', 'ingredient_linker.quantity')
        .where({ recipe_id: id })
}

function getInstructions(id) {
    return db('instructions')
        .select('instructions.step_number', 'instructions.instruction')
        .where({ recipe_id: id })
}

module.exports = {
    getRecipes,
    getRecipe,
    getShoppingList,
    getInstructions
}