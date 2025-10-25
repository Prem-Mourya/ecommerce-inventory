import type { TOrder } from "./order.interface.js";
export declare const orderService: {
    createNewOrder: (orderData: TOrder) => Promise<import("mongoose").Document<unknown, {}, TOrder, {}, {}> & TOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getOrders: (query: string | undefined) => Promise<(import("mongoose").Document<unknown, {}, TOrder, {}, {}> & TOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    updateOrder: (productId: string | undefined, updatedOrderData: any) => Promise<(import("mongoose").Document<unknown, {}, TOrder, {}, {}> & TOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteOrder: (productId?: string) => Promise<(import("mongoose").Document<unknown, {}, TOrder, {}, {}> & TOrder & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=order.service.d.ts.map