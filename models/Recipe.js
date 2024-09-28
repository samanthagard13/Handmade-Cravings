import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    ingredients: { type: [String], required: true }, 
    instructions: { type: [String], required: true }, 
    image_url: { type: String, required: true }
  });

const Recipe = mongoose.model('Recipe', recipeSchema, 'Appetizers');
console.log('Recipe model initialized');

export default Recipe;