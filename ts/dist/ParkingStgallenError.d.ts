import { Context } from './Context';
declare class ParkingStgallenError extends Error {
    isParkingStgallenError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ParkingStgallenError };
