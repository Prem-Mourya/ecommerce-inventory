import { Schema } from "mongoose";
import type { TUser } from "./user.interface.js";
export declare const UserSchema: Schema<TUser, import("mongoose").Model<TUser, any, any, any, import("mongoose").Document<unknown, any, TUser, any, {}> & TUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TUser, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TUser>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<TUser> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const UserModel: import("mongoose").Model<TUser, {}, {}, {}, import("mongoose").Document<unknown, {}, TUser, {}, {}> & TUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=user.molel.d.ts.map