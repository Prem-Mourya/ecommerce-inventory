import type { TProduct } from "./product.interface.js";
export declare const productServices: {
    getProducts: (searchTerm?: string) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {}, import("mongoose").DefaultSchemaOptions> & TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    createAProductIntoDB: (productData: TProduct) => Promise<import("mongoose").Document<unknown, {}, TProduct, {}, import("mongoose").DefaultSchemaOptions> & TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getProductById: (params: any) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {}, import("mongoose").DefaultSchemaOptions> & TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateProductById: (req: any) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {}, import("mongoose").DefaultSchemaOptions> & TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteProductById: (productId: string | undefined) => Promise<(import("mongoose").Document<unknown, {}, TProduct, {}, import("mongoose").DefaultSchemaOptions> & TProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=product.service.d.ts.map