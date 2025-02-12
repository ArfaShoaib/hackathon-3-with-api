import { connectToDatabase } from "../../../../lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Cart from "../../../../models/Cart";

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // Ensure this is set in .env.local
const client = new MongoClient(uri);
const dbName = "yourDatabaseName"; // Change to your database name

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (!body.productId || !body.title || !body.price || !body.image) {
      return NextResponse.json({ message: "Missing product data" }, { status: 400 });
    }

    await client.connect();
    const db = client.db(dbName);
    const cartCollection = db.collection("cart"); // Ensure "cart" collection exists

    await cartCollection.insertOne(body);

    return NextResponse.json({ message: "Product added to cart!" }, { status: 201 });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const cartCollection = db.collection("cart");

    const cartItems = await cartCollection.find({}).toArray();
    console.log("📌 Cart items fetched:", cartItems); // Debugging log

    return NextResponse.json(cartItems, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching cart items:", error);
    return NextResponse.json({ error: "Failed to fetch cart items" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const cartCollection = db.collection("cart");
    
    const { productId } = await req.json();
    
    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const result = await cartCollection.deleteOne({ productId: productId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item removed from cart" }, { status: 200 });
  } catch (error) {
    console.error("❌ Error removing item from cart:", error);
    return NextResponse.json({ error: "Failed to remove item" }, { status: 500 });
  } finally {
    await client.close();
  }
}
