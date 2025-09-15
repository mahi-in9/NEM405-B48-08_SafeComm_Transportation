import { Document } from "mongoose";
interface IStop {
    stopId: string;
    name: string;
    location: {
        type: "Point";
        coordinates: [number, number];
    };
}
interface IGeometry {
    type: "LineString";
    coordinates: [number, number][];
}
interface IRoute extends Document {
    routeId: string;
    name: string;
    stops: IStop[];
    geometry: IGeometry;
    active: boolean;
    createdAt: Date;
}
declare const Route: import("mongoose").Model<IRoute, {}, {}, {}, Document<unknown, {}, IRoute, {}, {}> & IRoute & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Route;
//# sourceMappingURL=Route.d.ts.map