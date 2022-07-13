import './RelativeAddress.css';
import { RelativeAddressProp } from "../../interface/props/relative-address-prop.interface";


export function RelativeAddress({ city, state, postal_code }: RelativeAddressProp)
{
    return (
        <div 
            className="relative-address"
            >
            <span className="city">{city}</span>
            <span className="state">{state}</span>
            <span className="postal-code">{postal_code}</span>
        </div>

    );
}