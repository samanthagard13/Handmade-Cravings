import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.REACT_APP_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

export default app; // Required for Vercel
