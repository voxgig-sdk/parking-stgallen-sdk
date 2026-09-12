import { ParkingRecordEntity } from './entity/ParkingRecordEntity';
export type * from './ParkingStgallenTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ParkingStgallenEntityBase } from './ParkingStgallenEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ParkingStgallenSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    ParkingRecord(entopts?: Record<string, any>): ParkingRecordEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ParkingStgallenSDK;
    tester(testopts?: any, sdkopts?: any): ParkingStgallenSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ParkingStgallenSDK;
export { stdutil, config, BaseFeature, ParkingStgallenEntityBase, ParkingStgallenSDK, SDK, };
