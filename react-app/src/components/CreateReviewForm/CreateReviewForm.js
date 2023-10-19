import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../store/reviews';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import './CreateReviewForm.css'

const CreateReviewForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector( state => state.session.user.id)
    const restaurantId = useSelector( state => state.restaurants.singleRestaurant.id)
    const [ text, setText ] = useState('')
    const [ starRating, setStarRating ] = useState(0)
    const { closeModal } = useModal()
    const [ clickStar, setClickStar ] = useState(starRating)
    const [ errors, setErrors ] = useState({})

    // const disabledCreate = starRating < 1 || text.length < 10

    const handleCreateReview = async (e) => {
        e.preventDefault()

        const errorsObj = {}

        if( starRating < 1 || starRating > 5) errorsObj.starRating = "Star rating must be between 1 and 5"
        if(text.length < 10){
            errorsObj.text = "Review must be atleast 10 characters"
        }else if(text.length > 100){
            errorsObj.text = "Review must be less than 100 characters"
        }

        const payload = {
            text: text,
            star_rating: starRating,
            user_id: userId,
            restaurant_id:restaurantId
        }

        if(Object.keys(errorsObj).length === 0){
            await dispatch(createReview(payload, restaurantId))
            closeModal()
            history.push(`/restaurants/${restaurantId}`)
        }else{
            setErrors(errorsObj)
        }
        // try{
        //     if(starRating){
        //         if(res){
        //             setErrors(res)
        //             console.log(res)
        //         }
        //     }else if(text.length > 10){
        //         setErrors(["Minimum of 10 characters is required"])
        //     }
        //     else{

        //         setErrors(["Star Rating is required"])
        //     }
        // }catch{

        // }
        // if(res){
        //     }else{
        //         setErrors(['Field is required'])
        //     }
    }


    return(
        <>
            <div className='main-create-review-container'>
                <h1> Add a Review </h1>
                <div className='create-review-form-container'>
                    <form onSubmit={handleCreateReview}>
                        <ul>{Object.values(errors).map(error => (<li className='errors'>{error}</li>))}</ul>
                        <div className='create-stars-input'>
                            <span
                                className={clickStar >= 1 ? 'full' : 'blank'}
                                onClick={(e)=> setStarRating(1)}
                                onMouseEnter={(e)=> setClickStar(1)}
                                onMouseLeave={(e)=> setClickStar(starRating)}
                                >
                                <i className="fa fa-star"></i>
                            </span>
                            <span
                                className={clickStar >= 2 ? 'full' : 'blank'}
                                onClick={(e)=> setStarRating(2)}
                                onMouseEnter={(e)=> setClickStar(2)}
                                onMouseLeave={(e)=> setClickStar(starRating)}
                                >
                                <i className="fa fa-star"></i>
                            </span>
                            <span
                                className={clickStar >= 3 ? 'full' : 'blank'}
                                onClick={(e)=> setStarRating(3)}
                                onMouseEnter={(e)=> setClickStar(3)}
                                onMouseLeave={(e)=> setClickStar(starRating)}
                                >
                                <i className="fa fa-star"></i>
                            </span>
                            <span
                                className={clickStar >= 4 ? 'full' : 'blank'}
                                onClick={(e)=> setStarRating(4)}
                                onMouseEnter={(e)=> setClickStar(4)}
                                onMouseLeave={(e)=> setClickStar(starRating)}
                                >
                                <i className="fa fa-star"></i>
                            </span>
                            <span
                                className={clickStar >= 5 ? 'full' : 'blank'}
                                onClick={(e)=> setStarRating(5)}
                                onMouseEnter={(e)=> setClickStar(5)}
                                onMouseLeave={(e)=> setClickStar(starRating)}
                                >
                                <i className="fa fa-star"></i>
                            </span>
                        </div>

                        <div>
                            <textarea
                            className='text-area-input'
                            type="text"
                            value={text}
                            required
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Helpful reviews mention specific items and describe their quality and taste"
                            minLength='10'
                            maxLength='200'
                            >
                            </textarea>
                            {/* <input
                            type="text"
                            value={text}
                            required
                            onChange={(e) => setText(e.target.value)}
                            /> */}
                        </div>

                        <button className='create-review-button' type="submit">Create Review</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateReviewForm
