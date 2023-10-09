import { useDispatch } from "react-redux"
import { deleteRestaurant, getRestaurants } from "../../store/restaurants"
import { useHistory } from "react-router-dom/"
import { useModal } from "../../context/Modal"
import './DeleteRestaurant.css'

const DeleteRestaurant = ({ restaurant }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()
    console.log(restaurant)

    const handleDeleteRestaurant = async (e) => {
        e.preventDefault()
        await dispatch(deleteRestaurant(restaurant.id))
        await dispatch(getRestaurants)
        closeModal()
        history.push('/restaurants')
    }

    const handleCancelClick = async (e) => {
        closeModal()
    }
    return(
        <>
            <div className="delete-restaurant-container">
                <div>
                    <h2>Delete Restaurant</h2>
                    <h4>Are you sure you want to delete this Restaurant?</h4>
                </div>

                <div>
                    <button className='cancel-delete-button' onClick={handleCancelClick}>Cancel</button>
                    <button className='delete-button' onClick={handleDeleteRestaurant}>Delete Restaurant</button>
                </div>
            </div>
        </>
    )
}

export default DeleteRestaurant
