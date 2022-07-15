import { StopTypeProp } from "../../interface/props/stop-type-prop.interface";


export function get_number_of_pick_ups(previous_value: number, { stop_type }: StopTypeProp)
{
    if (stop_type.toLowerCase() === 'pick up' )
        return ++previous_value;

    return previous_value;
}