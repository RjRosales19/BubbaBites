import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { thunkCreateItem } from "../../store/items"
import { useDispatch, useSelector } from "react-redux"

const CreateItemForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector( state => state.session.user.id)
    const restaurantId = useSelector( state => state.restaurants.singleRestaurant.id)
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ imageUrl, setImageUrl ] = useState('')
    const [ errors, setErrors ] = useState({})
    const { closeModal } = useModal()


    const handleCreateItem = async (e) => {
        e.preventDefault()

        const errorsObj = {}
        if(name.length < 4) errorsObj.name = "Name must be atleast 4 characters"
        if(description.length < 10) errorsObj.description = "Description must be atleast 10 characters"
        if(price <= 0) errorsObj.price = "Price must be atleast $1"
        if(imageUrl.length < 10) errorsObj.imageUrl = "Image Url must be atleast 10 characters"
        if(!imageUrl.endsWith('.jpg') && !imageUrl.endsWith('.png') && !imageUrl.endsWith('.jpeg')) errorsObj.imageUrl = "Image Url must be a .jpg, .png, or .jpeg"


        const payload = {
            name: name,
            description: description,
            price: price,
            image_url: imageUrl,
            restaurant_id: restaurantId,
        }

        if(Object.keys(errorsObj).length ===0){
            await dispatch(thunkCreateItem(payload, restaurantId))
            closeModal()
            history.push(`/restaurants/${restaurantId}`)
        }else{
            setErrors(errorsObj)
        }

    }

    return (
        <>
            <div>
                <h1>Add a Menu Item</h1>
                <div>
                    <form onSubmit={handleCreateItem}>
                        <ul>{Object.values(errors).map(error => <li className='errors'>{error}</li>)}</ul>

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


                        Price
                        <div>
                            <label>
                                <input
                                type="number"
                                value={price}
                                required
                                onChange={ (e) => setPrice(e.target.value)}
                                placeholder='Price'
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

                        Description
                        <div>
                            <label>
                                <textarea
                                type="text"
                                value={description}
                                required
                                onChange={ (e) => setDescription(e.target.value)}
                                placeholder='Description'
                                minLength='10'
                                maxLength='200'
                                >
                                </textarea>
                            </label>
                        </div>

                        <button type="submit">Create new Item</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateItemForm
