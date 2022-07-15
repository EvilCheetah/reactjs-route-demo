import './StopPointCard.css';
import { StopPointProp } from "../../interface/props/stop-point-prop.interface";
import { StopType } from '../stop-type/StopType';
import { StopAddress } from '../stop-address/StopAddress';
import { Appointment } from '../appointment/Appointment';
import { Cargo } from '../cargo/Cargo';


export function StopPointCard({ stop_point }: StopPointProp)
{
    const {stop_type, address, appointment, cargo} = stop_point;

    return (
        <div 
            className="card"
        >
            <StopType stop_type={stop_type} />
            <StopAddress address_information={address} />
            <Cargo cargo={cargo} />
            <Appointment appointment={appointment} />
        </div>
    );
}