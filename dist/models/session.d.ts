import { Document, Types } from "mongoose";
interface ISession extends Document {
    userId: Types.ObjectId;
    refreshToken: string;
    expiresAt: Date;
    createdAt: Date;
}
declare const Session: import("mongoose").Model<ISession, {}, {}, {}, Document<unknown, {}, ISession, {}, {}> & ISession & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Session;
//# sourceMappingURL=session.d.ts.map