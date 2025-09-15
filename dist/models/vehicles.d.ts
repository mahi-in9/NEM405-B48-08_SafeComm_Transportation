import { Document } from "mongoose";
interface IVehicle extends Document {
    vehicleId: string;
    routeId: string;
    lastLocation: {
        type: "Point";
        coordinates: [number, number];
    };
    lastSeenAt: Date;
    status: "in_service" | "out_of_service";
    createdAt: Date;
    updatedAt: Date;
}
declare const Vehicle: import("mongoose").Model<IVehicle, {}, {}, {}, Document<unknown, {}, IVehicle, {}, {}> & IVehicle & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Vehicle;
//# sourceMappingURL=vehicles.d.ts.map