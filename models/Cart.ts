import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Store user ID if implementing authentication
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    image: { type: String },
    size: { type: String },  // Optional for dress
    color: { type: String }, // Optional for dress
}, { timestamps: true });

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);