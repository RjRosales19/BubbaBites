import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedRestaurant } from "../../store/restaurants"
import { useParams } from 'react-router-dom'
import UpdateRestaurantForm from '../UpdateRestaurantForm/UpdateRestaurantForm'
import DeleteRestaurant from '../DeleteRestaurant/DeleteRestaurant'
import OpenModalButton from "../OpenModalButton"

const SingleRestaurant = () => {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector( state => state.restaurants.singleRestaurant )

    useEffect( async () => {
        await dispatch(getSelectedRestaurant(restaurantId))
    }, [dispatch, restaurantId])

    return(
        <div>
            <h2>{ restaurant.name }</h2>
            <div>{ restaurant.address }</div>
            <div>{ restaurant.city }</div>
            <div>{ restaurant.state }</div>
            <div>{ restaurant.hours }</div>
            <OpenModalButton
                buttonText="Update Restaurant"
                modalComponent={<UpdateRestaurantForm />}
            />
            <OpenModalButton
                buttonText="Delete Restaurant"
                modalComponent={<DeleteRestaurant restaurant={restaurant}/>}
            />
        </div>
    )
}

export default SingleRestaurant
