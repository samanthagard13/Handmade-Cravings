import 'dotenv/config'; 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const allowedOrigins = [
  'http://localhost:5173', 
  'https://handmade-cravings.vercel.app',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));



const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/appetizers', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const appetizers = await db.collection('appetizer').find({}).toArray();
    res.json(appetizers);
  } catch (error) {
    console.error('Error fetching appetizers:', error);
    res.status(500).send('Error fetching appetizers');
  }
});

export default app;
