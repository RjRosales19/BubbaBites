import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../store/restaurants';
import { useHistory } from 'react-router-dom';
const CreateRestaurantForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [ name, setName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ state, setState ] = useState('')
    const [ city, setCity ] = useState('')
    const [ hours, setHours ] = useState('')
    const [ imageUrl , setImageUrl ] = useState('')

    const handleCreateRestaurant = async (e) => {
        e.preventDefault()

        const payload = {
            name: name,
            address: address,
            state: state,
            city: city,
            hours: hours,
            image_url: imageUrl
        }
        const res = await dispatch(createRestaurant(payload))
        if(res){
            history.push(`/restaurants/${res.id}`)
        }
    }
    return(
        <>
        <div>
            Create a Restaurant
        </div>

        <form onSubmit={handleCreateRestaurant}>
            <label>Name
                <input
                type="text"
                value={name}
                onChange={ (e) => setName(e.target.value)}
                />
            </label>
            <label>Address
                <input
                type="text"
                value={address}
                onChange={ (e) => setAddress(e.target.value)}
                />
            </label>
            <label>State
                <input
                type="text"
                value={state}
                onChange={ (e) => setState(e.target.value)}
                />
            </label>
            <label>City
                <input
                type="text"
                value={city}
                onChange={ (e) => setCity(e.target.value)}
                />
            </label>
            <label>Hours
                <input
                type="text"
                value={hours}
                onChange={ (e) => setHours(e.target.value)}
                />
            </label>
            <label>Image Url
                <input
                type="url"
                value={imageUrl}
                onChange={ (e) => setImageUrl(e.target.value)}
                />
            </label>
            <button type="submit">Create new Restaurant</button>
        </form>
        </>
    )
}

export default CreateRestaurantForm
