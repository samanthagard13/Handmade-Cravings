import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("HC-Recipes");
  const recipes = await db.collection("Recipes").find().toArray();

  res.status(200).json(recipes);
}
