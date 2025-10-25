import type { Request, Response } from "express";
export declare const UserController: {
    registerUser: (req: Request, res: Response) => Promise<void>;
    loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=user.controller.d.ts.map