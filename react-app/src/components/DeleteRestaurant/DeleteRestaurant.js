import { useDispatch } from "react-redux"
import { deleteRestaurant, getRestaurants } from "../../store/restaurants"
import { useHistory } from "react-router-dom/"

const DeleteRestaurant = ({ restaurant }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    console.log(restaurant)

    const handleDeleteRestaurant = async (e) => {
        e.preventDefault()
        await dispatch(deleteRestaurant(restaurant.id))
        await dispatch(getRestaurants)
        history.push('/restaurants')
    }
    return(
        <>
            <h2>Delete Restaurant</h2>
            <button onClick={handleDeleteRestaurant}>Delete Restaurant</button>
        </>
    )
}

export default DeleteRestaurant
