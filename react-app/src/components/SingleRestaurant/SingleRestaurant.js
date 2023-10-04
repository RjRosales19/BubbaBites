import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedRestaurant } from "../../store/restaurants"
import { useParams } from 'react-router-dom'
import UpdateRestaurantForm from '../UpdateRestaurantForm/UpdateRestaurantForm'
import DeleteRestaurant from '../DeleteRestaurant/DeleteRestaurant'
import OpenModalButton from "../OpenModalButton"
import { getAllReviews } from "../../store/reviews"
import CreateReviewForm from "../CreateReviewForm/CreateReviewForm"

const SingleRestaurant = () => {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const user = useSelector( state=> state.session.user)
    const restaurant = useSelector( state => state.restaurants.singleRestaurant )
    const reviews = useSelector( state => state.reviews.allReviews)
    console.log(Object.values(reviews))

    useEffect(async () => {
        await dispatch(getSelectedRestaurant(restaurantId))
        await dispatch(getAllReviews(restaurantId))
    }, [dispatch])

    // if(!restaurant) return null

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

                <div>
                    <OpenModalButton
                    buttonText="Create a Review"
                    modalComponent={<CreateReviewForm />}
                    />
                </div>
            {reviews.length ?
            <div>
                {reviews.map((review) => { return(
                    <div>
                        <div>{user.username}</div>
                        <div>{review.star_rating}</div>
                        <div>{review.text}</div>
                        <div>{review.created_at}</div>
                    </div>
                    )
                }
                )}
            </div>
            : null }

            </div>
        </>
    )
}

export default SingleRestaurant
