import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createRestaurant } from '../../store/restaurants';
import { useModal } from '../../context/Modal';
import './CreateRestaurantForm.css'
const CreateRestaurantForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userId = useSelector( state => state.session.user?.id)
    const [ name, setName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ state, setState ] = useState('')
    const [ city, setCity ] = useState('')
    const [ hours, setHours ] = useState('')
    const [ imageUrl , setImageUrl ] = useState('')
    const [ errors, setErrors ] = useState({})
    const { closeModal } = useModal();

    if(!userId) history.push('/restaurants')

    const handleCreateRestaurant = async (e) => {
        e.preventDefault()

        const errorsObj = {}

        if(name.length < 4) errorsObj.name = "Name must be atleast 4 characters"
        if(address.length < 5) errorsObj.address = "Address must be atleast 5 characters"
        if(state.length < 2) errorsObj.state = "State must be atleast 2 characters"
        if(city.length < 4) errorsObj.city = "City must be atleast 4 characters"
        if(hours.length < 4 ) errorsObj.hours = "Hours must be atleast 4 characters"
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
            const res = await dispatch(createRestaurant(payload))
            closeModal()
            history.push(`/restaurants/${res.id}`)
        }else{
            setErrors(errorsObj)
        }
    }

    return(
        <>
        <div className='main-create-restaurant-container'>

            <h1>Create a Restaurant</h1>

            <div className='create-restaurant-form-container'>
                <div>
                    <form onSubmit={handleCreateRestaurant}>
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

                        <button className='create-new-restaurant-button' type="submit">Create new Restaurant</button>

                    </form>
                </div>

            </div>
        </div>
        </>
    )
}

export default CreateRestaurantForm
