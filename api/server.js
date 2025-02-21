import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = "HC-Recipes"; // Your database name

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your environment variables");
}

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(DB_NAME);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  const { client, db } = await connectToDatabase();

  if (req.method === "GET") {
    try {
      const appetizersCollection = db.collection("appetizer");
      const appetizers = await appetizersCollection.find({}).toArray();
      res.status(200).json(appetizers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch recipes" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
