

export default function( state = null, action)
{
    switch (action.type)
    {
        case 'PRICE_SELECTED':
            return action.payload;
    }

    // Basically the below is the default case if the action type that is being dispatched to this reducer is not one that we wanted, we return null
    // This is also why we set our state to null in this function's arguments.
    return state;
}