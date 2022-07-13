import './StopAddress.css';

import { CompanyName } from "../company-name/CompanyName";
import { StopAddressProp } from "../../interface/props/stop-address-prop.interface";
import { RelativeAddress } from "../relative-address/RelativeAddress";


export function StopAddress({ address_information }: StopAddressProp)
{
    const { 
        company_name,
        address_line_1,
        address_line_2,
        city,
        state,
        postal_code,
        country
    } = address_information;

    return (
        <span
            className="address-information"
        >
            {company_name && <CompanyName company_name={company_name} />}
            <div className="address-line-1">{address_line_1}</div>
            {address_line_2 && (<div className="address-line-2">{address_line_2}</div>)}
            <RelativeAddress city={city} state={state} postal_code={postal_code} />
            <div className="country">{country}</div>
        </span>
    );
}