import { useDispatch } from "react-redux";
import { deleteReview, getAllReviews } from "../../store/reviews";
import { useHistory } from "react-router-dom";
import { getSelectedRestaurant } from "../../store/restaurants";

const DeleteReview = ({ review }) => {
    const dispatch = useDispatch()

    const handleDeleteReview = async(e) => {
        e.preventDefault()
        await dispatch(deleteReview(review.id))
        await dispatch(getAllReviews(review.restaurant_id))
    }

    return(
        <>
            <h2>Delete Review</h2>
            <button onClick={handleDeleteReview}>Delete Review</button>
        </>
    )
}

export default DeleteReview
