import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createRestaurant } from '../../store/restaurants';
import { useModal } from '../../context/Modal';
import './CreateRestaurantForm.css'
const CreateRestaurantForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userId = useSelector( state => state.session.user.id)
    const [ name, setName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ state, setState ] = useState('')
    const [ city, setCity ] = useState('')
    const [ hours, setHours ] = useState('')
    const [ imageUrl , setImageUrl ] = useState('')
    const { closeModal } = useModal();

    const handleCreateRestaurant = async (e) => {
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

        const res = await dispatch(createRestaurant(payload))
        closeModal()
        history.push(`/restaurants/${res.id}`)
    }

    return(
        <>
        <div className='main-create-restaurant-container'>

            <h1>Create a Restaurant</h1>

            <div className='create-restaurant-form-container'>
                <div>
                    <form onSubmit={handleCreateRestaurant}>

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
