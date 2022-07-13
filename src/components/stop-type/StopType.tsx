import './StopType.css';

import { StopTypeProp } from "../../interface/props/stop-type-prop.interface";
import { get_stop_type_classname } from "../../function/get-stop-type-classname.function";


export function StopType({ stop_type }: StopTypeProp)
{
    return (
        <span className={`stop-type ${get_stop_type_classname(stop_type)}`}>
            {stop_type}
        </span>
    )
}