import { useDispatch } from "react-redux"
import { deleteRestaurant, getRestaurants } from "../../store/restaurants"
import { useHistory } from "react-router-dom/"
import { useModal } from "../../context/Modal"

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
            <h2>Delete Restaurant</h2>
            <h4>Are you sure you want to delete this Restaurant?</h4>
            <button onClick={handleDeleteRestaurant}>Delete Restaurant</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </>
    )
}

export default DeleteRestaurant
