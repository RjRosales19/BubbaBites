
// ACTION TYPE
const READ_REVIEWS = 'reviews/GET_ALL_REVIEWS';

// ACTION CREATOR
export const readReviews = (reviews) => ({
    type: READ_REVIEWS,
    payload: reviews,
})

//THUNKS
export const getAllReviews = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`)

    if(res.ok){
        const data = await res.json()
        const restaurantReviews = data.reviews
        dispatch(readReviews(restaurantReviews))
        return restaurantReviews
    }
}

const initialState = { allReviews: {}, singleReview: {}}
//REVIEW REDUCER
export default function reviewReducer( state = initialState, action){
    switch(action.type){
        case READ_REVIEWS:
            return { ...state, allReviews: action.payload }
        default:
            return state
    }
}
