import { model, Schema } from "mongoose";
const VariantSchema = new Schema({
    type: String,
    value: String,
}, { _id: false });
const InventorySchema = new Schema({
    quantity: Number,
    inStock: Boolean,
}, { _id: false });
const ProductSchema = new Schema({
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
//# sourceMappingURL=product.model.js.map