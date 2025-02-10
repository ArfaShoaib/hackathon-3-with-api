import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Define the cache type properly
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

// Extend the global object to store the Mongoose connection
const globalWithMongoose = global as typeof global & { mongoose?: MongooseCache };
globalWithMongoose.mongoose = globalWithMongoose.mongoose || { conn: null, promise: null };

const cached: MongooseCache = globalWithMongoose.mongoose;

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("✅ Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🛠 Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, {}).then(() => {
      console.log("✅ Connected to MongoDB");
      return mongoose.connection;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
