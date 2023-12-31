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
    const updatedReview = allReviews.find(review => review.id === reviewId)
    const userId = useSelector( state => state.session.user.id)
    const restaurantId = useSelector( state => state.restaurants.singleRestaurant.id)
    const [ text, setText ] = useState(updatedReview.text)
    const [ starRating, setStarRating ] = useState(updatedReview.star_rating)
    const { closeModal } = useModal()
    const [ clickStar, setClickStar ] = useState(starRating)
    const [ errors, setErrors ] = useState({})
    // const disabledUpdate = starRating < 1 || text.length < 10

    console.log(updatedReview, review.id)
    console.log(updatedReview.star_rating)

    const handleUpdateReview = async (e) => {
        e.preventDefault()

        const errorsObj = {}

        if( starRating < 1 || starRating > 5) errorsObj.starRating = "Star rating must be between 1 and 5"
        if(text.length < 10){
            errorsObj.text = "Review must be atleast 10 characters"
        }else if(text.length > 100){
            errorsObj.text = "Review must be less than 100 characters"
        }
        
        const payload = {
            text: text,
            star_rating: starRating,
            user_id: userId,
            restaurant_id:restaurantId
        }

        if(Object.keys(errorsObj).length === 0){
            await dispatch(updateReview(payload, updatedReview.id))
            await dispatch(getAllReviews(restaurantId))
            closeModal()
            history.push(`/restaurants/${restaurantId}`)
        }else{
            setErrors(errorsObj)
        }
    }

    return(
        <>
            <div className='main-create-review-container'>
                <h1> Update Review </h1>
                <div className='create-review-form-container'>
                    <form onSubmit={handleUpdateReview}>
                        <ul>{Object.values(errors).map(error => (<li className='errors'>{error}</li>))}</ul>
                        <div className='create-stars-input'>
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
                        </div>

                        <div>
                            <textarea
                            className='text-area-input'
                            type="text"
                            value={text}
                            required
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Helpful reviews mention specific items and describe their quality and taste"
                            minLength='10'
                            maxLength='200'
                            >
                            </textarea>
                        </div>

                <button className='create-review-button'type="submit">Update Review</button>
            </form>
                </div>
            </div>
        </>
    )
}

export default UpdateReviewForm
