import { StopTypeProp } from "../../interface/props/stop-type-prop.interface";


export function get_number_of_deliveries(previous_value: number, { stop_type }: StopTypeProp)
{
    if (stop_type.toLowerCase() === 'delivery' )
        return ++previous_value;

    return previous_value;
}