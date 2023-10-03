
// ACTION TYPE
const GET_ALL_RESTAURANTS = 'restaurants/GET_ALL_RESTAURANTS';
const GET_ONE_RESTAURANT = 'restaurants/GET_ONE_RESTAURANT';
// ACTION CREATOR
const getAllRestaurants = (allRestaurants) => ({
    type: GET_ALL_RESTAURANTS,
    payload: allRestaurants
})

const getSingleRestaurant = (restaurant) => ({
    type: GET_ONE_RESTAURANT,
    payload: restaurant
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

export const getSelectedRestaurant = (restaurantId) => async (dispatch) => {
    const res = await fetch(`/api/restaurants/${restaurantId}`)

    if(res.ok){
        const data = await res.json()
        dispatch(getSingleRestaurant(data))
    } else {
        console.log('No restaurant found')
    }
}

export const createRestaurant = (restaurant) => async (dispatch) => {
    const res = await fetch('/api/restaurants', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant)
    })
    if(res.ok){
        const data = await res.json()
        dispatch(getSingleRestaurant(data.id))
        return data
    }
}


const initialState = { allRestaurants:{}, singleRestaurant: {}}
// Restaurant Reducer
export default function restaurantReducer  ( state = initialState, action)  {
    switch(action.type){
        case GET_ALL_RESTAURANTS:
            return { ...state, allRestaurants: action.payload}
        case GET_ONE_RESTAURANT:
            return { ...state, singleRestaurant: action.payload }
        default:
            return state
    }
}
