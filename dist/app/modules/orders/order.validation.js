import { z } from "zod";
const OrderValidationSchema = z.object({
    email: z
        .string({
        message: "Email is required",
    })
        .nonempty(),
    productId: z.string({ message: "Product ID is required." }).nonempty(),
    quantity: z
        .number({
        message: "Quantity is required.",
    })
        .positive()
        .min(1)
        .max(1000),
    price: z.number().positive(),
});
export default OrderValidationSchema;
//# sourceMappingURL=order.validation.js.map