export declare const UserService: {
    findUserByEmail: (email: string) => Promise<(import("mongoose").Document<unknown, {}, import("./user.interface.js").TUser, {}, {}> & import("./user.interface.js").TUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    registerUser: (email: string, password: string, role: string) => Promise<import("mongoose").Document<unknown, {}, import("./user.interface.js").TUser, {}, {}> & import("./user.interface.js").TUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    ValidatePassword: (inputPassword: string, userPassword: string) => Promise<boolean>;
};
//# sourceMappingURL=user.servise.d.ts.map