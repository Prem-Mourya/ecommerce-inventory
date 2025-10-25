import type { Request, Response } from "express";
export declare const OrderController: {
    createOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getOrders: (req: Request, res: Response) => Promise<void>;
    updateOrder: (req: Request, res: Response) => Promise<void>;
    deleteOrder: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=order.controller.d.ts.map