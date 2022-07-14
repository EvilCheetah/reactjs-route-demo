import { PalletProps } from "../../interface/props/pallets-prop.interface";


export function Pallets({ pallets }: PalletProps)
{
    return (
        <div className="pallets">
            <strong>Pieces:</strong> {pallets}
        </div>
    );    
}