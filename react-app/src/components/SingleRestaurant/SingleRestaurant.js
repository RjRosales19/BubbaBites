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
import DeleteItem from "../DeleteItem/DeleteItem"
import './SingleRestaurant.css'
import UpdateItem from "../UpdateItem/UpdateItem"

const SingleRestaurant = () => {
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    let user = useSelector( state=> state.session.user)
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
    console.log(user)
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
        let user = 0
        // const user = false

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
                        <div>Location:
                            <div>{ restaurant.address }{ restaurant.city }, { restaurant.state }</div>
                        </div>
                        <div>Hours:
                            <div>{ restaurant.hours }</div>
                        </div>

                        <div>{reviews.length} public reviews</div>
                        <div>
                            { reviewsAvg.toFixed(1) } out of 5 <i className="fa fa-star" style={{color: "rgb(255,255,255)"}}></i>
                        </div>
                    </div>
                </div>

                <div className="ratings-rewiews-container">
                    <h3>Ratings & Reviews</h3>
                    <div>{reviews.length} public reviews</div>
                    <div>
                        { reviewsAvg.toFixed(1) } out of 5 <i className="fa fa-star" style={{color: "rgb(24, 108, 104)"}}></i>
                    </div>
                    {user && !(restaurantOwner || reviewOwner) &&
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
                        <div>
                            {/* {review.user_id === user.id ? user?.username : review.user_id} */}
                            {review.user_id}  · <i className="fa fa-star" style={{color: "rgb(24, 108, 104)"}}></i>{review.star_rating.toFixed(1)} ·  {newCurrentDate}
                        </div>
                        <div>{review.text}</div>
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



            </div>
            <div className="menu-items-container">
                <h3>Menu Items</h3>

                <div className="all-items-container">
                    {itemsList.map(item => {
                        return(
                            <>
                                <div className="item-info-container">
                                    <img style={{width: "20rem", borderRadius:"10px"}}src={item.image_url}></img>
                                    <h3>{item.name}</h3>
                                    <div>{item.description}</div>
                                    <h4>${item.price}</h4>
                                </div>
                                <div>
                                {user && (restaurant.user_id === user.id) &&
                                (<>
                                    <OpenModalButton
                                        buttonText='Update'
                                        buttonStyling='update-restaurant-button'
                                        modalComponent={<UpdateItem item={item}/>}
                                    />
                                    <OpenModalButton
                                        buttonText='Delete'
                                        buttonStyling='delete-restaurant-button'
                                        modalComponent={<DeleteItem item={item}/>}
                                    />
                                    </>)
                                }
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SingleRestaurant
