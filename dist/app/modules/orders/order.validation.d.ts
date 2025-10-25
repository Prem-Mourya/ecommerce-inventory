import { z } from "zod";
declare const OrderValidationSchema: z.ZodObject<{
    email: z.ZodString;
    productId: z.ZodString;
    quantity: z.ZodNumber;
    price: z.ZodNumber;
}, z.core.$strip>;
export default OrderValidationSchema;
//# sourceMappingURL=order.validation.d.ts.map