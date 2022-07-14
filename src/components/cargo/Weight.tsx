import { WeightProp } from "../../interface/props/weight-prop.interface";


export function Weight({ weight }: WeightProp)
{
    return (
        <div className="weight">
            <strong>Weight:</strong> {weight} lbs
        </div>
    );    
}