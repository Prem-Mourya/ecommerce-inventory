import { model, Schema } from "mongoose";
import type { TInventory, TProduct, TVariant } from "./product.interface.js";

const VariantSchema = new Schema<TVariant>(
  {
    type: String,
    value: String,
  },
  { _id: false }
);

const InventorySchema = new Schema<TInventory>(
  {
    quantity: Number,
    inStock: Boolean,
  },
  { _id: false }
);

const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema,
});

// Creating model
export const Product = model("Product", ProductSchema);
