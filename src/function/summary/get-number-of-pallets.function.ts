import { CargoProp } from "../../interface/props/cargo-prop.interface";


export function get_number_of_pallets(previous_value: number, { cargo }: CargoProp)
{
    if (cargo?.pallets)
        return ( previous_value + cargo.pallets);

    return previous_value;
}