import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews, updateReview } from "../../store/reviews"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"

const UpdateReviewForm = ({ review }) => {
    const dispatch = useDispatch()
    const reviewId = review.id
    const history = useHistory()
    const allReviews = useSelector( state => state.reviews.allReviews)
    const updatedReview = allReviews.find(review => review.id == reviewId)
    const userId = useSelector( state => state.session.user.id)
    const restaurantId = useSelector( state => state.restaurants.singleRestaurant.id)
    const [ text, setText ] = useState(updatedReview.text)
    const [ starRating, setStarRating ] = useState(updatedReview.starRating)
    const { closeModal } = useModal()

    console.log(updatedReview, review.id)
    const handleUpdateReview = async (e) => {
        e.preventDefault()

        const payload = {
            text: text,
            star_rating: starRating,
            user_id: userId,
            restaurant_id:restaurantId
        }
        const res = await dispatch(updateReview(payload, updatedReview.id))
        await dispatch(getAllReviews(restaurantId))
        closeModal()
        if(res){

            history.push(`/restaurants/${restaurantId}`)
        }
    }
    return(
        <>
            <div> Update a review </div>
            <form onSubmit={handleUpdateReview}>
                <label>Text</label>
                <input
                type="text"
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
                />
                <label>Rating:</label>
                <input
                type="number"
                value={starRating}
                required
                onChange={(e) => setStarRating(e.target.value)}
                />
                <button type="submit">Update Review</button>
            </form>
        </>
    )
}

export default UpdateReviewForm
