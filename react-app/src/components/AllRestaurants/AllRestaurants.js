import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from '../../store/restaurants'
import { Link } from 'react-router-dom'

const AllRestaurants = () => {
    const dispatch = useDispatch()
    const restaurants = useSelector( state => state.restaurants.allRestaurants)

    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch])

    if(!restaurants.length) return null

    return(
        <div>
            {restaurants.map(restaurant => {
                return(
                    <div>
                        <Link to={`/restaurants/${restaurant.id}`}>
                        <img src={restaurant.image_url} alt={`${restaurant.name}`}/>
                        <div>{restaurant.name}</div>
                        <div>{restaurant.hours}</div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllRestaurants
