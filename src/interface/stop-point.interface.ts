import { IAddress } from "./address.interface";
import { IAppointment } from "./appointment.interface";
import { ICargo } from "./cargo.interface";
import { ISequence } from "./stop-sequence.interface";
import { IStopType } from "./stop-type.interface";


export interface StopPoint
extends 
    ISequence,
    IStopType,
    IAddress,
    IAppointment,
    ICargo
{}