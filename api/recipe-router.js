const express = require('express');
const recipeModel = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipeModel.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving recipes' });
        });
});

router.get('/:id', (req, res) => {
    recipeModel.getRecipe(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving recipe'});
        })
})

router.get('/:id/ingredients', (req, res) => {
    const recipe = recipeModel.getRecipe(req.params.id);
    recipeModel.getShoppingList(req.params.id)
        .then(ingredients => {
            if(recipe) {
                res.status(200).json({ recipe: recipe.name, ingredients: ingredients });
            } else {
                res.status(404).json({ message: 'recipe does not exist'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving shopping list'});
        })
})

router.get('/:id/instructions', (req, res) => {
    recipeModel.getInstructions(req.params.id)
        .then(instructions => {
            if(instructions) {
                res.status(200).json(instructions);
            } else {
                res.status(404).json({ message: 'recipe does not exist' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving instructions' })
        })
})

module.exports = router;