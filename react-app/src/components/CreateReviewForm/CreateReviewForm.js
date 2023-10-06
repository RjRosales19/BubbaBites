import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import './CreateReviewForm.css'
const CreateReviewForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector( state => state.session.user.id)
    const restaurantId = useSelector( state => state.restaurants.singleRestaurant.id)
    const [ text, setText ] = useState('')
    const [ starRating, setStarRating ] = useState(0)
    const { closeModal } = useModal()
    const [ clickStar, setClickStar ] = useState(starRating)
    const [ errors, setErrors ] = useState({})

    const handleCreateReview = async (e) => {
        e.preventDefault()

        const payload = {
            text: text,
            star_rating: starRating,
            user_id: userId,
            restaurant_id:restaurantId
        }

        const res = await dispatch(createReview(payload, restaurantId))
        closeModal()
            if(res){
            //     setErrors(res)
                history.push(`/restaurants/${restaurantId}`)
                // console.log(errors)
            }
    }


    return(
        <>
            <div> Post a review </div>
            <form onSubmit={handleCreateReview}>
                <label>Text</label>
                <input
                type="text"
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
                />
                <label>Rating:</label>
                {/* <input
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

                <button type="submit">Create Review</button>
            </form>
        </>
    )
}

export default CreateReviewForm
