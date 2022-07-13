import { CompanyNameProp } from "../../interface/props/company-name-prop.interface";


export function CompanyName({ company_name }: CompanyNameProp)
{
    return (
        <div 
            className="company-name"
        >
            <strong>{company_name}</strong>
        </div>
    );
}