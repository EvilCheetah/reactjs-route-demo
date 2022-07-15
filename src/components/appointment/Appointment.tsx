import './Appointment.css';
import { AppointmentItem } from "./AppointmentItem";
import { AppointmentProp } from "../../interface/props/appointment-prop.interface";


export function Appointment({ appointment }: AppointmentProp)
{
    const {type, from, to} = appointment;

    return (
        <div className="appointment-information">
            <div className={`appointment-type ${type.toLowerCase()}`}>{type}</div>
            <div className='time-frame'>
                <AppointmentItem datetime_string={from} prefix="From" />
                {to && (<AppointmentItem datetime_string={to} prefix="To"/>)}
            </div>
        </div>
    )
}