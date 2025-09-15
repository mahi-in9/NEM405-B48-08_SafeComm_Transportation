import { Response } from "express";
interface AuthRequest {
    user?: {
        id: string;
        email: string;
        role: string;
    };
}
export declare const registerUser: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginUser: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getProfile: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllUsers: (_req: AuthRequest, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=userController.d.ts.map