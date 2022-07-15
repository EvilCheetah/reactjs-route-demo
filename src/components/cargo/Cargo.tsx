import './Cargo.css';
import { CargoProp } from "../../interface/props/cargo-prop.interface";
import { Pallets } from "./Pallets";
import { Weight } from "./Weight";


export function Cargo({ cargo }: CargoProp)
{
    if (!cargo)
        return (
            <div className="cargo"></div>
        );
    
    const {weight, pallets} = cargo

    return (
        <div className="cargo">
            {weight  && <Weight  weight={weight} />}
            {pallets && <Pallets pallets={pallets} />}
        </div>
    );
}