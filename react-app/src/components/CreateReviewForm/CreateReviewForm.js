import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';

const CreateReviewForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector( state => state.session.user.id)
    const restaurantId = useSelector( state => state.restaurants.singleRestaurant.id)
    const [ text, setText ] = useState('')
    const [ starRating, setStarRating ] = useState(0)
    const { closeModal } = useModal()

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
                history.push(`/restaurants/${restaurantId}`)
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
                <input
                type="number"
                value={starRating}
                required
                onChange={(e) => setStarRating(e.target.value)}
                />
                <button type="submit">Create Review</button>
            </form>
        </>
    )
}

export default CreateReviewForm
