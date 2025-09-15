import { Document } from "mongoose";
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "user" | "moderator" | "admin";
    createdAt: Date;
    lastActiveAt: Date;
}
declare const User: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default User;
//# sourceMappingURL=User.d.ts.map