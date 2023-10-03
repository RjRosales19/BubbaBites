
// ACTION TYPE
const GET_ALL_RESTAURANTS = 'restaurants/GET_ALL_RESTAURANTS';

// ACTION CREATOR
const getAllRestaurants = (allRestaurants) => ({
    type: GET_ALL_RESTAURANTS,
    payload: allRestaurants
})

// THUNK AC
export const getRestaurants = () => async (dispatch) => {
    const res = await fetch('/api/restaurants')

    if(res.ok){
        const data = await res.json();
        const allRestaurants = data.restaurants
        console.log(allRestaurants)
        dispatch(getAllRestaurants(allRestaurants));
    } else {
        console.log('No restaurants found')
    }
}

const initialState = { allRestaurants:{}, singleRestaurant: {}}
// Restaurant Reducer
export default function restaurantReducer  ( state = initialState, action)  {
    switch(action.type){
        case GET_ALL_RESTAURANTS:
            return { ...state, allRestaurants: action.payload}
        default:
            return state
    }
}
