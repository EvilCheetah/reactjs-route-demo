import { CargoProp } from "../../interface/props/cargo-prop.interface";


export function get_total_weight(previous_value: number, { cargo }: CargoProp)
{
    if (cargo?.weight)
        return ( previous_value + cargo.weight);

    return previous_value;
}