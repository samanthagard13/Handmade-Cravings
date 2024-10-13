import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Recipe from './models/Recipe.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error', err));

app.get('/', (req, res) => {
  res.send('Welcome to Handmade Cravings');
});

app.get('/api/Handmade-Cravings/Appetizers', async (req, res) => {
  try {
      const recipes = await Recipe.find();
      res.json(recipes);
  } catch (err) {
      console.error('Error fetching app recipes:', err);
      res.status(500).send('Server error');
  }
});

app.get('/api/Handmade-Cravings/Appetizers/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id); 
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.json(recipe);
  } catch (err) {
    console.error('Error fetching the recipe:', err);
    res.status(500).send('Server error');
  }
});


app.get('/api/Handmade-Cravings/Dinners', async (req, res) => {
  try {
    const recipes = await Recipe.find({ category: 'Dinners' });
    res.json(recipes);
  } catch (err) {
    console.error('Error fetching dinner recipes:', err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
