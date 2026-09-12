import { ParkingStgallenEntityBase } from '../ParkingStgallenEntityBase';
import type { ParkingStgallenSDK } from '../ParkingStgallenSDK';
import type { Control } from '../types';
import type { ParkingRecord, ParkingRecordLoadMatch, ParkingRecordListMatch } from '../ParkingStgallenTypes';
declare class ParkingRecordEntity extends ParkingStgallenEntityBase<ParkingRecord> {
    constructor(client: ParkingStgallenSDK, entopts: any);
    make(this: ParkingRecordEntity): ParkingRecordEntity;
    load(this: any, reqmatch?: ParkingRecordLoadMatch, ctrl?: Control): Promise<ParkingRecordEntity>;
    list(this: any, reqmatch?: ParkingRecordListMatch, ctrl?: Control): Promise<ParkingRecordEntity[]>;
}
export { ParkingRecordEntity };
