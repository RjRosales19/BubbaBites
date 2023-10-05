import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedRestaurant } from "../../store/restaurants"
import { useParams } from 'react-router-dom'
import UpdateRestaurantForm from '../UpdateRestaurantForm/UpdateRestaurantForm'
import DeleteRestaurant from '../DeleteRestaurant/DeleteRestaurant'
import OpenModalButton from "../OpenModalButton"
import { getAllReviews } from "../../store/reviews"
import CreateReviewForm from "../CreateReviewForm/CreateReviewForm"
import UpdateReviewForm from '../UpdateReviewForm/UpdateReviewForm'
import DeleteReview from "../DeleteReview/DeleteReview"
import './SingleRestaurant.css'

const SingleRestaurant = () => {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const user = useSelector( state=> state.session.user)
    const restaurant = useSelector( state => state.restaurants.singleRestaurant )
    const reviews = useSelector( state => state.reviews.allReviews)
    console.log(Object.values(reviews).reverse())

    useEffect(async () => {
        await dispatch(getSelectedRestaurant(restaurantId))
        await dispatch(getAllReviews(restaurantId))
    }, [dispatch])

    // if(!restaurant) return null

    return(
        <>
            <div className="single-restaurant-container">
                <div>

                <div><img alt={`${restaurant.name}`} src={ restaurant.image_url }/></div>
                <h2>{ restaurant.name }</h2>
                <div>{ restaurant.address }</div>
                <div>{ restaurant.city }</div>
                <div>{ restaurant.state }</div>
                <div>{ restaurant.hours }</div>

                </div>
                {/* <OpenModalButton
                    buttonText="Update Restaurant"
                    modalComponent={<UpdateRestaurantForm />}
                    />
                <OpenModalButton
                    buttonText="Delete Restaurant"
                    modalComponent={<DeleteRestaurant restaurant={restaurant}/>}
                    /> */}

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
                        <OpenModalButton
                            buttonText='Edit Review'
                            modalComponent={<UpdateReviewForm review={review}/>}
                        />
                        <OpenModalButton
                            buttonText='Delete Review'
                            modalComponent={<DeleteReview review={review}/>}
                        />
                    </div>
                    )
                }
                ).reverse()}
            </div>
            : null }

            </div>
        </>
    )
}

export default SingleRestaurant
