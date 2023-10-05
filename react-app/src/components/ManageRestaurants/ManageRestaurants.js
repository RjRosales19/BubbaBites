import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../store/restaurants"
import UpdateRestaurantForm from '../UpdateRestaurantForm/UpdateRestaurantForm'
import DeleteRestaurant from '../DeleteRestaurant/DeleteRestaurant'
import OpenModalButton from "../OpenModalButton"
import CreateRestaurantForm from "../CreateRestaurantForm/CreateRestaurantForm"

const ManageRestaurants = () => {
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants.allRestaurants)
    const userId = useSelector(state => state.session.user.id)
    const ownedRestaurants = Object.values(restaurants).filter(restaurant => restaurant.user_id === userId)
    console.log("---------------------------",ownedRestaurants)
    console.log(restaurants, userId)

    useEffect(() => {
        dispatch(getRestaurants())
    },[dispatch])

    return(
        <>
            <h1> Manage your Restaurants</h1>
            <div>
                        <OpenModalButton
                        buttonText="Create Restaurant"
                        modalComponent={<CreateRestaurantForm />}
                        />
                {ownedRestaurants.map( restaurant => (
                    <div>
                        <div>{restaurant.name}</div>
                        <div><img alt={`${restaurant.name}`} src={ restaurant.image_url }/></div>
                        <OpenModalButton
                        buttonText="Update Restaurant"
                        modalComponent={<UpdateRestaurantForm restaurant={restaurant}/>}
                        />
                        <OpenModalButton
                        buttonText="Delete Restaurant"
                        modalComponent={<DeleteRestaurant restaurant={restaurant}/>}
                        />
                    </div>


                ))}
            </div>
        </>
    )
}

export default ManageRestaurants