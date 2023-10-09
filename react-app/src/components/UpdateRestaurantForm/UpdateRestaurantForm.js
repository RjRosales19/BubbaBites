import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateRestaurant } from "../../store/restaurants"
import { useModal } from "../../context/Modal"
import './UpdateRestaurantForm.css'

const UpdateRestaurantForm = ({restaurant}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userId = useSelector( state => state.session.user.id)
    const updatedRestaurant = restaurant
    // const updatedRestaurant = useSelector( state => state.restaurants.singleRestaurant)
    const [ name, setName ] = useState(updatedRestaurant.name)
    const [ address, setAddress ] = useState(updatedRestaurant.address)
    const [ state, setState ] = useState(updatedRestaurant.state)
    const [ city, setCity ] = useState(updatedRestaurant.city)
    const [ hours, setHours ] = useState(updatedRestaurant.hours)
    const [ imageUrl , setImageUrl ] = useState(updatedRestaurant.image_url)
    const { closeModal } = useModal()
    console.log(restaurant)
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
        closeModal()
        if(res){
            history.push(`/restaurants/${updatedRestaurant.id}`)
        }
    }

    return(
        <>
        <div className="main-create-restaurant-container">

            <h1>Update a Restaurant</h1>

            <div className="create-restaurant-form-container">
                <form onSubmit={handleUpdateRestaurant}>

                Name
                        <div>
                            <label>
                                <input
                                type="text"
                                value={name}
                                required
                                onChange={ (e) => setName(e.target.value)}
                                placeholder='Name'
                                />
                            </label>
                        </div>

                        Address
                        <div>
                            <label>
                                <input
                                type="text"
                                value={address}
                                required
                                onChange={ (e) => setAddress(e.target.value)}
                                placeholder='Address'
                                />
                            </label>
                        </div>

                        State
                        <div>
                            <label>
                                <input
                                type="text"
                                value={state}
                                required
                                onChange={ (e) => setState(e.target.value)}
                                placeholder='State'
                                />
                            </label>
                        </div>

                        City
                        <div>
                            <label>
                                <input
                                type="text"
                                value={city}
                                required
                                onChange={ (e) => setCity(e.target.value)}
                                placeholder='City'
                                />
                            </label>
                        </div>

                        Hours
                        <div>
                            <label>
                                <input
                                type="text"
                                value={hours}
                                required
                                onChange={ (e) => setHours(e.target.value)}
                                placeholder='Hours'
                                />
                            </label>
                        </div>

                        Image Url
                        <div>
                            <label>
                                <input
                                type="url"
                                value={imageUrl}
                                required
                                onChange={ (e) => setImageUrl(e.target.value)}
                                placeholder='Image Url'
                                />
                            </label>
                        </div>

                    <button className="create-new-restaurant-button" type="submit">Update Restaurant</button>
                </form>
            </div>
        </div>

        </>
    )
}

export default UpdateRestaurantForm
