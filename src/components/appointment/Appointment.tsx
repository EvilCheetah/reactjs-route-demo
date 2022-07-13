import { format_time } from "../../function/format-time.function";
import { AppointmentProp } from "../../interface/props/appointment-prop.interface";


export function Appointment({ appointment }: AppointmentProp)
{
    const formatted_from = format_time(appointment.from);
    const formatted_to   = appointment.to ? format_time(appointment.to) : null;

    return (
        <div className="appointment-information">
            <span className="time-from"></span>
            <span className="time-to"></span>
        </div>
    )
}