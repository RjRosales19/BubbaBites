import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from '../../store/restaurants'

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
                    <div>{restaurant.name}</div>
                )
            })}
        </div>
    )
}

export default AllRestaurants
