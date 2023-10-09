import { useDispatch } from "react-redux";
import { deleteReview, getAllReviews } from "../../store/reviews";
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
            <div className="delete-restaurant-container">
                <div>
                    <h2>Delete Review</h2>
                    <h4>Are you sure you want to delete this Review?</h4>
                </div>

                <div>
                    <button className='cancel-delete-button' onClick={handleCancelClick}>Cancel</button>
                    <button className='delete-button' onClick={handleDeleteReview}>Delete Review</button>
                </div>
            </div>
        </>
    )
}

export default DeleteReview
