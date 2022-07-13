import './StopPointCard.css';
import { StopPointProp } from "../../interface/props/stop-point-prop.interface";
import { StopType } from '../stop-type/StopType';
import { StopAddress } from '../stop-address/StopAddress';


export function StopPointCard({ stop_point }: StopPointProp)
{
    const {stop_type, address, ...other} = stop_point;

    return (
        <div 
            className="stop-point-card"
        >
            <StopType stop_type={stop_type} />
            <StopAddress address_information={address} />
            
        </div>
    );
}