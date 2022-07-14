import { get_formatted_time } from "../../function/get-formatted-time.function";

import { DateTimeProp } from "../../interface/props/datetime-prop.interface";


export function AppointmentItem({ datetime_string, prefix }: DateTimeProp)
{
    const {time, date} = get_formatted_time(datetime_string);

    return (
        <div className={`time-card ${prefix.toLowerCase()}-time`}>
            <div className="prefix">
                <strong>
                    {prefix}:
                </strong>
            </div>
            <div>
                <div className="time">{time}</div>
                <div className="date">{date}</div>
            </div>
        </div>
    );
}