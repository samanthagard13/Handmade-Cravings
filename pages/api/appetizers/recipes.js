import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("HC-Recipes");

    // Fetch only recipes from the 'appetizer' collection
    const appetizers = await db.collection("Appetizers").find().toArray();

    res.status(200).json(appetizers);
  } catch (error) {
    console.error("Error fetching appetizers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
