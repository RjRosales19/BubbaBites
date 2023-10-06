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
    const [ starRating, setStarRating ] = useState(updatedReview.star_rating)
    const { closeModal } = useModal()
    const [ clickStar, setClickStar ] = useState(starRating)

    console.log(updatedReview, review.id)
    console.log(updatedReview.star_rating)
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
                {/* <label>Rating:</label>
                <input
                type="number"
                value={starRating}
                required
                onChange={(e) => setStarRating(e.target.value)}
                /> */}
                <span
                    className={clickStar >= 1 ? 'full' : 'blank'}
                    onClick={(e)=> setStarRating(1)}
                    onMouseEnter={(e)=> setClickStar(1)}
                    onMouseLeave={(e)=> setClickStar(starRating)}
                >
                    <i className="fa fa-star"></i>
                </span>
                <span
                    className={clickStar >= 2 ? 'full' : 'blank'}
                    onClick={(e)=> setStarRating(2)}
                    onMouseEnter={(e)=> setClickStar(2)}
                    onMouseLeave={(e)=> setClickStar(starRating)}
                >
                    <i className="fa fa-star"></i>
                </span>
                <span
                    className={clickStar >= 3 ? 'full' : 'blank'}
                    onClick={(e)=> setStarRating(3)}
                    onMouseEnter={(e)=> setClickStar(3)}
                    onMouseLeave={(e)=> setClickStar(starRating)}
                >
                    <i className="fa fa-star"></i>
                </span>
                <span
                    className={clickStar >= 4 ? 'full' : 'blank'}
                    onClick={(e)=> setStarRating(4)}
                    onMouseEnter={(e)=> setClickStar(4)}
                    onMouseLeave={(e)=> setClickStar(starRating)}
                >
                    <i className="fa fa-star"></i>
                </span>
                <span
                    className={clickStar >= 5 ? 'full' : 'blank'}
                    onClick={(e)=> setStarRating(5)}
                    onMouseEnter={(e)=> setClickStar(5)}
                    onMouseLeave={(e)=> setClickStar(starRating)}
                >
                    <i className="fa fa-star"></i>
                </span>
                <button type="submit">Update Review</button>
            </form>
        </>
    )
}

export default UpdateReviewForm
