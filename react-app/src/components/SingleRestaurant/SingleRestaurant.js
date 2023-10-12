import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedRestaurant } from "../../store/restaurants"
import { useParams } from 'react-router-dom'
import OpenModalButton from "../OpenModalButton"
import { getAllReviews } from "../../store/reviews"
import { thunkGetAllItems } from "../../store/items"
import CreateReviewForm from "../CreateReviewForm/CreateReviewForm"
import UpdateReviewForm from '../UpdateReviewForm/UpdateReviewForm'
import DeleteReview from "../DeleteReview/DeleteReview"
import './SingleRestaurant.css'

const SingleRestaurant = () => {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const user = useSelector( state=> state.session.user)
    const restaurant = useSelector( state => state.restaurants.singleRestaurant )
    const reviews = Object.values(useSelector(state => state.reviews.allReviews))
    const items = useSelector(state => state.items.allItems)
    const itemsList = Object.values(items)
    console.log(itemsList)
    // console.log((reviews).find(review => review.user_id === user.id))
    console.log(user)
    let newCurrentDate
    const restaurantOwner = user && restaurant.user_id === user.id
    const reviewOwner = user && reviews.find((review) => review.user_id === user.id)
    const initial = 0
    // const reviewsAvg = reviews.map(review => review.star_rating.reduce((acc, curr) => acc + curr, initial )))/reviews.length
    const reviewsAvg = (reviews.map(review => review.star_rating).reduce((acc,curr) => acc+curr, initial))/reviews.length
    const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
    const imageError = (e) => {
        e.target.src = defaultImage
    }
    console.log(reviewsAvg)
    useEffect(() => {
        dispatch(getSelectedRestaurant(restaurantId))
        dispatch(getAllReviews(restaurantId))
        dispatch(thunkGetAllItems(restaurantId))
    }, [dispatch, restaurantId])

    if(!user) {
        const user = 0
    }
    if(reviews.length < 0) {
        return null
    }else{
        const review = reviews.find((review) => review.restaurant_id === restaurant.id)
        const newDate = new Date(review?.created_at).getTime()
        if(newDate){
            newCurrentDate = new Intl.DateTimeFormat('en-us').format(newDate)
            console.log(newCurrentDate)
        }
    }



    return(
        <>
            <div className="single-restaurant-container">
                <div className="restaurant-details-container">
                    <div className="single-restaurant-image-container">
                    <img onError={imageError} src={restaurant.image_url ? restaurant.image_url : defaultImage } alt={`${restaurant.name}`}/>
                    </div>

                    <div className="single-restaurant-details-container">
                        <h2>{ restaurant.name }</h2>
                        <div>Location:{ restaurant.address }
                            <div>{ restaurant.city }, { restaurant.state }</div>
                        </div>
                        <div>Hours:{ restaurant.hours }</div>

                        {/* <div>Reviews Average:{ reviewsAvg.toFixed(1) }</div> */}
                        <div>
                            {/* <div>Total Reviews { reviews.length}</div> */}
                        </div>
                    </div>
                </div>
                <h3>Ratings & Reviews</h3>
                <div>{reviews.length} public reviews</div>
                {user && !(restaurantOwner ||
                reviewOwner) &&
                    <div>
                        <OpenModalButton
                        buttonStyling='create-restaurant-button'
                        buttonText="Add Review"
                        modalComponent={<CreateReviewForm />}
                        />
                    </div>
                }
            {reviews.length ?
            <div className="all-reviews-container">
                {reviews.map((review) => { return(
                    <div className="review-information-container">
                        <div>{review.text}</div>
                        <div>
                            {review.user_id} · <i className="fa fa-star"></i>{review.star_rating.toFixed(1)} ·  {newCurrentDate}
                        </div>
                        {user && (user.id === review.user_id) &&
                        (<>
                            <OpenModalButton
                                buttonText='Update'
                                buttonStyling='update-restaurant-button'
                                modalComponent={<UpdateReviewForm review={review}/>}
                            />
                            <OpenModalButton
                                buttonText='Delete'
                                buttonStyling='delete-restaurant-button'
                                modalComponent={<DeleteReview review={review}/>}
                            />
                        </>)
                        }
                    </div>
                    )
                }
                ).reverse()}
            </div>
            : null }

            </div>
            <div>
                {itemsList.map(item => {
                    return(
                        <>
                            <div>
                                <img style={{width: "20rem"}}src={item.image_url}></img>
                                <h3>{item.name}</h3>
                                <div>{item.description}</div>
                                <div>${item.price}</div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default SingleRestaurant
