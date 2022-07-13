import { StopPointType } from "../types/stop-point-type.type";


export function get_stop_type_classname(stop_type: StopPointType)
{
    return (stop_type.toLowerCase() === 'delivery') ? 'delivery' : 'pick-up';
}