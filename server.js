import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Recipe from './models/Recipe.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Connection error', err));

app.get('/', (req, res) => {
  res.send('Welcome to Handmade Cravings');
});

app.get('/api/Handmade-Cravings/Appetizers', async (req, res) => {
  try {
    const recipes = await Recipe.find({ category: 'Appetizers' });
    if (recipes.length === 0) {
      return res.status(404).json({ message: 'No appetizers found' });
    }
    res.json(recipes);
  } catch (err) {
    console.error('Error fetching appetizers:', err);
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

app.get("/api/Handmade-Cravings/Dinners", async (req, res) => {
  try {
    console.log("Fetching dinners...");

    const recipes = await Recipe.find({ category: 'Dinners' });

    console.log("Fetched dinners:", recipes);  // Log what is fetched

    if (recipes.length === 0) {
      console.log("No dinners found");
      return res.status(404).json({ message: 'No dinners found' });
    }

    res.json(recipes);
  } catch (err) {
    console.error('Error fetching dinners:', err);
    return res.status(500).json({ message: "Error fetching dinners", error: err });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
