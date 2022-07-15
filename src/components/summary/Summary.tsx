import { get_number_of_pallets } from "../../function/summary/get-number-of-pallets.function";
import { get_number_of_deliveries } from "../../function/summary/get-number-of-pick-deliveries.function";
import { get_number_of_pick_ups } from "../../function/summary/get-number-of-pick-ups.function";
import { get_total_weight } from "../../function/summary/get-total-weight.function";
import { SummaryStopPoints } from "../../interface/props/summary-stop-points-prop.interface";


export function Summary({ stop_points }: SummaryStopPoints)
{
    return (
        <div className="summary">
            <div className="info-entry pick-ups">
                Pick-Ups: { stop_points.reduce(get_number_of_pick_ups, 0) } Stops
            </div>
            <div className="info-entry deliveries">
                Deliveries: { stop_points.reduce(get_number_of_deliveries, 0) } Stops
            </div>
            <div className="info-entry number-of-pallets">
                Pallets: { stop_points.reduce(get_number_of_pallets, 0) } pcs
            </div>
            <div className="info-entry">
                Weight: { stop_points.reduce(get_total_weight, 0) } pcs
            </div>
        </div>
    );
}