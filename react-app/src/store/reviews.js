
// ACTION TYPE
const READ_REVIEWS = 'reviews/GET_ALL_REVIEWS';
const POST_REVIEW =  'reviews/POST_REVIEW';

// ACTION CREATOR
export const readReviews = (reviews) => ({
    type: READ_REVIEWS,
    payload: reviews,
})

export const postReview = (review) => ({
    type: POST_REVIEW,
    payload: review
})

//THUNKS
export const getAllReviews = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`)
    console.log(res)

    if(res.ok){
        const data = await res.json()
        const restaurantReviews = data.reviews
        dispatch(readReviews(restaurantReviews))
        return restaurantReviews
    }
}

export const createReview = (review, restaurantId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${restaurantId}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
    })
    if(res.ok){
        const data = await res.json()
        dispatch(getAllReviews(restaurantId))
        return data
    }
}

const initialState = { allReviews: {}, singleReview: {} }
//REVIEW REDUCER
export default function reviewReducer( state = initialState, action){
    switch(action.type){
        case READ_REVIEWS:
            return { ...state, allReviews: action.payload }
        case POST_REVIEW:
            return { ...state, allReviews: [ ...state.allReviews, action.payload]}
        default:
            return state
    }
}
