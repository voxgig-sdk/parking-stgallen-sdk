export interface ParkingRecord {
    datasetid?: string;
    fields?: Record<string, any>;
    geometry?: Record<string, any>;
    record_timestamp?: string;
    recordid?: string;
}
export interface ParkingRecordLoadMatch {
    dataset: string;
    format?: string;
    timezone?: string;
}
export interface ParkingRecordListMatch {
    dataset: string;
    exclude_phid?: string;
    exclude_phname?: string;
    facet?: any[];
    format?: string;
    lang?: string;
    q?: string;
    refine_phid?: string;
    refine_phname?: string;
    row?: number;
    sort?: string;
    start?: number;
    timezone?: string;
}
