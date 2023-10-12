// ACTION TYPE
const GET_ALL_ITEMS = 'items/GET_ALL_ITEMS';
const GET_SINGLE_ITEM = 'items/GET_SINGLE_ITEM';

// ACTION CREATOR

const getAllItems = (allItems) => ({
    type: GET_ALL_ITEMS,
    payload: allItems
})

const getSingleItem = (item) => ({
    type: GET_SINGLE_ITEM,
    payload: item
})


// THUNKS
export const thunkGetAllItems = (restaurantId) => async (dispatch) => {
    const res = await fetch(`/api/items/${restaurantId}`)
    console.log(res)
    if(res.ok){
        const data = await res.json()
        console.log(data)
        const restaurantItems = data.items
        dispatch(getAllItems(restaurantItems))
        return restaurantItems
    }
}

const initialState = { allItems: {}, singleItem: {}}
//ITEM REDUCER
export default function itemReducer( state = initialState, action){
    switch(action.type){
        case GET_ALL_ITEMS:
            return { ...state, allItems: action.payload }
        default:
            return state
    }
}
