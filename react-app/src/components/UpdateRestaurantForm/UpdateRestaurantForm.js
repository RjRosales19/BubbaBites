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
    const [ errors, setErrors ] = useState({})
    const { closeModal } = useModal()
    console.log(restaurant)
    const handleUpdateRestaurant = async (e) => {
        e.preventDefault()

        const errorsObj = {}

        if(name.length < 4){
            errorsObj.name = "Name must be atleast 4 characters"
        }else if(name.length > 30){
            errorsObj.name = "Name must be less than 30 characters"
        }
        if(address.length < 5){
            errorsObj.address = "Address must be atleast 5 characters"
        }else if(address.length > 35){
            errorsObj.address = "Address must be less than 35 characters"
        }
        if(state.length < 2){
            errorsObj.state = "State must be atleast 2 characters"
        }else if(state.length > 20){
            errorsObj.state = "State must be less than 20 characters"
        }
        if(city.length < 4){
            errorsObj.city = "City must be atleast 4 characters"
        }else if(city.length > 20){
            errorsObj.city = "City must be less than 20 characters"
        }
        if(hours.length < 4 ){
            errorsObj.hours = "Hours must be atleast 4 characters"
        }else if(hours.length > 25){
            errorsObj.hours = "Hours must be less than 25 characters"
        }
        if(imageUrl.length < 10) errorsObj.imageUrl = "Image Url must be atleast 10 characters"
        if(!imageUrl.endsWith('.jpg') && !imageUrl.endsWith('.png') && !imageUrl.endsWith('.jpeg')) errorsObj.imageUrl = "Image Url must be a .jpg, .png, or .jpeg"

        const payload = {
            name: name,
            user_id: userId,
            address: address,
            state: state,
            city: city,
            hours: hours,
            image_url: imageUrl
        }

        if(Object.keys(errorsObj).length === 0){
            const res = await dispatch(updateRestaurant(payload, updatedRestaurant.id))
            closeModal()
            history.push(`/restaurants/${updatedRestaurant.id}`)
        }else{
            setErrors(errorsObj)
        }
    }

    return(
        <>
        <div className="main-create-restaurant-container">

            <h1>Update a Restaurant</h1>

            <div className="create-restaurant-form-container">
                <form onSubmit={handleUpdateRestaurant}>

                        <ul>
							{Object.values(errors).map(error => <li className='errors'>{error}</li>)}
						</ul>

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
