// ACTION TYPE
const GET_ALL_ITEMS = 'items/GET_ALL_ITEMS';
const GET_SINGLE_ITEM = 'items/GET_SINGLE_ITEM';
const REMOVE_ITEM = 'items/REMOVE_ITEM'
// ACTION CREATOR

const getAllItems = (allItems) => ({
    type: GET_ALL_ITEMS,
    payload: allItems
})

const getSingleItem = (item) => ({
    type: GET_SINGLE_ITEM,
    payload: item
})

const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    payload: itemId
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

export const thunkGetSelectedItem = (itemId) => async (dispatch) => {
    const res = await fetch(`/api/items/${itemId}`)

    if(res.ok){
        const data = await res.json()
        dispatch(getSingleItem(data))
    }
}

export const thunkCreateItem = (item, restaurantId) => async(dispatch) => {
    const res = await fetch(`/api/items/${restaurantId}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
    })
    if(res.ok){
        const data = await res.json()
        dispatch(thunkGetAllItems(restaurantId))
        return data
    }else{
        const errors = await res.json()
        return errors
    }
}

export const thunkEditItem = (item, itemId) => async (dispatch) => {
    const res = await fetch(`/api/items/${itemId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
    })
    if(res.ok){
        const data = await res.json
        dispatch(thunkGetSelectedItem(itemId))
        return data
    }else{
        console.log('errors')
    }
}

export const thunkDeleteItem = (itemId) => async(dispatch) => {
    const res = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(removeItem(itemId))
        return itemId
    }
}

const initialState = { allItems: {}, singleItem: {}}
//ITEM REDUCER
export default function itemReducer( state = initialState, action){
    switch(action.type){
        case GET_ALL_ITEMS:
            return { ...state, allItems: action.payload }
        case GET_SINGLE_ITEM:
            return { ...state, singleItem: action.payload}
        default:
            return state
    }
}
