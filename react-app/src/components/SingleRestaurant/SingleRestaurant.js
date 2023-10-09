import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedRestaurant } from "../../store/restaurants"
import { useParams } from 'react-router-dom'
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
    console.log(reviews)

    // const initial = 0
    // const reviewsAvg = (reviews.map(review => review.star_rating.reduce((acc, curr) => acc + curr, initial )))/reviews.length
        useEffect(async () => {
            await dispatch(getSelectedRestaurant(restaurantId))
            await dispatch(getAllReviews(restaurantId))
        }, [dispatch, restaurantId])


    if(!reviews) return null

    return(
        <>
            <div className="single-restaurant-container">
                <div className="restaurant-details-container">
                    <div className="single-restaurant-image-container"><img alt={`${restaurant.name}`} src={ restaurant.image_url }/></div>

                    <div className="single-restaurant-details-container">
                        <h2>{ restaurant.name }</h2>
                        <div>{ restaurant.address }</div>
                        <div>{ restaurant.city }</div>
                        <div>{ restaurant.state }</div>
                        <div>{ restaurant.hours }</div>

                        {/* <div>{ reviewsAvg.toFixed(1) }</div> */}
                        <div>
                            {/* (<div>{ reviews.length}</div>)+ */}
                        </div>
                    </div>
                </div>
                {user &&
                    <div>
                        <OpenModalButton
                        buttonText="Add Review"
                        modalComponent={<CreateReviewForm />}
                        />
                    </div>
                }
                <h3>Reviews</h3>
            {reviews.length ?
            <div>
                <div>{reviews.length} public reviews</div>
                {reviews.map((review) => { return(
                    <div>
                        <div>{user.username}</div>
                        <div>{review.star_rating.toFixed(1)}</div>
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
