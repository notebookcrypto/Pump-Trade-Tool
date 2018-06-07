// This file is called an ACTION CREATOR

// selectedPrice() is an ActionCreator, it needs to return an action.
// Which is an object with a type property.  
// Every action usually has 2 properties: a type to describe the object (always has this) 
 // and a payload (or data) that further or clarifies the conditions of the action being triggered (sometimes but not always has this).

export function selectedPrice(price)
{
    const PRICE_SELECTED = "PRICE_SELECTED";

    return {

        type: PRICE_SELECTED,
        payload: price

    };
}