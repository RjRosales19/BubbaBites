import { useDispatch } from "react-redux";
import { deleteReview, getAllReviews } from "../../store/reviews";
import { useHistory } from "react-router-dom";
import { getSelectedRestaurant } from "../../store/restaurants";
import { useModal } from "../../context/Modal";


const DeleteReview = ({ review }) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleDeleteReview = async(e) => {
        e.preventDefault()
        await dispatch(deleteReview(review.id))
        await dispatch(getAllReviews(review.restaurant_id))
        closeModal()
    }

    const handleCancelClick = async (e) => {
        closeModal()
    }
    return(
        <>
            <h2>Delete Review</h2>
            <h4>Are you sure you want to delete this Review?</h4>
            <button onClick={handleDeleteReview}>Delete Review</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </>
    )
}

export default DeleteReview
