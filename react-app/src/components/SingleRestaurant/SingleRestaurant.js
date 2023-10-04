import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedRestaurant } from "../../store/restaurants"
import { useParams } from 'react-router-dom'
import UpdateRestaurantForm from '../UpdateRestaurantForm/UpdateRestaurantForm'
import DeleteRestaurant from '../DeleteRestaurant/DeleteRestaurant'
import OpenModalButton from "../OpenModalButton"
import { getAllReviews } from "../../store/reviews"

const SingleRestaurant = () => {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector( state => state.restaurants.singleRestaurant )
    const reviews = useSelector( state => state.reviews.allReviews)
    console.log(reviews)
    useEffect( async () => {
        await dispatch(getSelectedRestaurant(restaurantId))
        await dispatch(getAllReviews(restaurantId))
    }, [dispatch])

    if(!reviews.length) return null
    return(
        <>
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
            {reviews.length ?
            <div>
                {reviews.map((review) => {
                    <div> {review.star_rating}</div>
                    console.log(review.star_rating)
                    // <div>{review.star_rating}</div>
                }
                )}
            </div>
            : null }
            </div>
        </>
    )
}

export default SingleRestaurant
