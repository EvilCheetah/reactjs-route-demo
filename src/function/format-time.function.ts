import { DateTime } from 'luxon';


export function format_time(datetime_string: string)
{
    const date = DateTime.fromISO(datetime_string).setZone('America/Los_Angeles')

    return {
        time: date.toFormat('HH:mm ZZZZ'),
        date: date.toFormat('ccc, LLL dd, kkkk')
    }
}