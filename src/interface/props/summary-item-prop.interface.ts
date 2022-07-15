import { StopPoint } from "../stop-point.interface";


export interface SummaryItemProp
{
    stop_points: StopPoint[];

    reduce_function: any;

    class_name: string;
}