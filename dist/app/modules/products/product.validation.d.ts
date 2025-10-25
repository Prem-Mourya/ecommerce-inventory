import { z } from "zod";
export declare const VariantValidationSchema: z.ZodObject<{
    type: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export declare const InventoryValidationSchema: z.ZodObject<{
    quantity: z.ZodNumber;
    inStock: z.ZodBoolean;
}, z.core.$strip>;
declare const ProductValidationSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    variants: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
    inventory: z.ZodObject<{
        quantity: z.ZodNumber;
        inStock: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export default ProductValidationSchema;
//# sourceMappingURL=product.validation.d.ts.map