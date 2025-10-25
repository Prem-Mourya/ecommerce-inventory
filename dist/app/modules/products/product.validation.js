import { z } from "zod";
export const VariantValidationSchema = z.object({
    type: z.string(),
    value: z.string(),
});
export const InventoryValidationSchema = z.object({
    quantity: z.number().positive(),
    inStock: z.boolean(),
});
const ProductValidationSchema = z.object({
    name: z
        .string({ message: "Product name must be a string" })
        .nonempty("Product name is required"),
    description: z.string(),
    price: z.number().positive(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(VariantValidationSchema),
    inventory: InventoryValidationSchema,
});
export default ProductValidationSchema;
//# sourceMappingURL=product.validation.js.map