import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../store/restaurants"
import UpdateRestaurantForm from '../UpdateRestaurantForm/UpdateRestaurantForm'
import DeleteRestaurant from '../DeleteRestaurant/DeleteRestaurant'
import OpenModalButton from "../OpenModalButton"
import CreateRestaurantForm from "../CreateRestaurantForm/CreateRestaurantForm"
import './ManageRestaurants.css'
const ManageRestaurants = () => {
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants.allRestaurants)
    const userId = useSelector(state => state.session.user.id)
    const ownedRestaurants = Object.values(restaurants).filter(restaurant => restaurant.user_id === userId)
    const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
    const imageError = (e) => {
        e.target.src = defaultImage
    }
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
                        buttonText="Create a Restaurant"
                        buttonStyling='create-restaurant-button'
                        modalComponent={<CreateRestaurantForm />}
                        />
                <div className="all-restaurants-container">
                    {ownedRestaurants.map( restaurant => (
                        <div className="restaurant-tile-container">
                            <Link to={`/restaurants/${restaurant.id}`}>
                                <img onError={imageError} src={restaurant.image_url ? restaurant.image_url : defaultImage } alt={`${restaurant.name}`}/>
                                <div>{restaurant.name}</div>
                            </Link>
                            <div className="manage-restaurant-buttons">
                                <OpenModalButton
                                    buttonText="Update"
                                    buttonStyling='update-restaurant-button'
                                    modalComponent={<UpdateRestaurantForm restaurant={restaurant}/>}
                                />
                                <OpenModalButton
                                    buttonText="Delete"
                                    buttonStyling='delete-restaurant-button'
                                    modalComponent={<DeleteRestaurant restaurant={restaurant}/>}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ManageRestaurants
