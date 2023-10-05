import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateRestaurant } from "../../store/restaurants"


const UpdateRestaurantForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userId = useSelector( state => state.session.user.id)
    const updatedRestaurant = useSelector( state => state.restaurants.singleRestaurant)
    const [ name, setName ] = useState(updatedRestaurant.name)
    const [ address, setAddress ] = useState(updatedRestaurant.address)
    const [ state, setState ] = useState(updatedRestaurant.state)
    const [ city, setCity ] = useState(updatedRestaurant.city)
    const [ hours, setHours ] = useState(updatedRestaurant.hours)
    const [ imageUrl , setImageUrl ] = useState(updatedRestaurant.image_url)

    const handleUpdateRestaurant = async (e) => {
        e.preventDefault()

        const payload = {
            name: name,
            user_id: userId,
            address: address,
            state: state,
            city: city,
            hours: hours,
            image_url: imageUrl
        }
        console.log("PAYLOAD", payload)
        console.log("UPDATED RESTAURANT",updatedRestaurant)
        const res = await dispatch(updateRestaurant(payload, updatedRestaurant.id))
        if(res){
            history.push(`/restaurants/${updatedRestaurant.id}`)
        }
    }

    return(
        <>
        <div>
            Update a Restaurant
        </div>

        <form onSubmit={handleUpdateRestaurant}>
            <label>Name
                <input
                type="text"
                value={name}
                required
                onChange={ (e) => setName(e.target.value)}
                />
            </label>
            <label>Address
                <input
                type="text"
                value={address}
                required
                onChange={ (e) => setAddress(e.target.value)}
                />
            </label>
            <label>State
                <input
                type="text"
                value={state}
                required
                onChange={ (e) => setState(e.target.value)}
                />
            </label>
            <label>City
                <input
                type="text"
                value={city}
                required
                onChange={ (e) => setCity(e.target.value)}
                />
            </label>
            <label>Hours
                <input
                type="text"
                value={hours}
                required
                onChange={ (e) => setHours(e.target.value)}
                />
            </label>
            <label>Image Url
                <input
                type="url"
                value={imageUrl}
                required
                onChange={ (e) => setImageUrl(e.target.value)}
                />
            </label>
            <button type="submit">Update Restaurant</button>
        </form>
        </>
    )
}

export default UpdateRestaurantForm
