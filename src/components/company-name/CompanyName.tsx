import './CompanyName.css';
import { CompanyNameProp } from "../../interface/props/company-name-prop.interface";


export function CompanyName({ company_name }: CompanyNameProp)
{
    return (
        <div 
            className="company-name"
        >
            {company_name}
        </div>
    );
}