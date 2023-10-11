import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from '../../store/restaurants'
import { Link } from 'react-router-dom'
import './AllRestaurants.css'

const AllRestaurants = () => {
    const dispatch = useDispatch()
    const restaurants = useSelector( state => state.restaurants.allRestaurants)
    const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
    const imageError = (e) => {
        e.target.src = defaultImage
    }
    
    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch])

    if(!restaurants.length) return null
    // if(!restaurants.image_url) restaurants.image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"

    return(
        <div className='all-restaurants-container'>
            {restaurants.map(restaurant => {
                return (
                    <div className='restaurant-tile-container'>
                        <Link to={`/restaurants/${restaurant.id}`}>
                            <img onError={imageError} src={restaurant.image_url ? restaurant.image_url : defaultImage } alt={`${restaurant.name}`}/>
                            <div className='restaurant-tile-info-container'>
                                <div>{restaurant.name}</div>
                                <div>{restaurant.hours}</div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllRestaurants
