export function selectedPrice(price)
{
    const PRICE_SELECTED = "PRICE_SELECTED";

    return {

        type: PRICE_SELECTED,
        payload: price

    };
}