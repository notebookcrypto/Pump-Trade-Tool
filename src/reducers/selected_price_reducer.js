// This is just a 'dummy' or 'bounceback' reducer function.  It's entire purpose is to subscribe to an action that we want it to
// And be able to relay that data to any of our class components that become containers, in our specific case below this is done
// so that we can communicate from one Sibling container to another sibling container, in the hopes that the second sibling container (MiddleColumn)
// passes our data to its child functional dummy component 'Potential_Sell_Price'


// State argument is not application state
// It is ONLY the state this reducer is responsible for
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