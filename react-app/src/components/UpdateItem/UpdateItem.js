import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { thunkEditItem, thunkGetAllItems } from "../../store/items"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"

const UpdateItem = ({item}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const itemId = item.id
    const allItems = useSelector( state => state.items.allItems)
    const updatedItem = allItems.find( item => item.id === itemId)
    const user = useSelector(state => state.session.user)
    const restaurantId = useSelector(state => state.restaurants.singleRestaurant.id)

    console.log(item)
    const [ name, setName ] = useState(updatedItem.name)
    const [ description, setDescription ] = useState(updatedItem.description)
    const [ price , setPrice ] = useState(updatedItem.price)
    const [ imageUrl, setImageUrl ] = useState(updatedItem.image_url)
    const [ errors, setErrors ] = useState({})
    const { closeModal } = useModal()

    const handleUpdateItem = async (e) => {
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

        if(Object.keys(errorsObj).length === 0){
            await dispatch(thunkEditItem(payload, updatedItem.id))
            await dispatch(thunkGetAllItems(restaurantId))
            closeModal()
            history.push(`/restaurants/${restaurantId}`)
        }else{
            setErrors(errorsObj)
        }
    }

    return(
        <>
            <div className="main-create-restaurant-container">
                <h1>Update Item</h1>
                <div className="create-menu-item-form-container">
                    <form onSubmit={handleUpdateItem}>
                        <ul>{Object.values(errors).map(error => (<li className='errors'>{error}</li>))}</ul>

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
                                className="create-item-description-input"
                                onChange={ (e) => setDescription(e.target.value)}
                                placeholder='Description'
                                minLength='10'
                                maxLength='200'
                                >
                                </textarea>
                            </label>
                        </div>

                        <button className='create-new-menu-item-button' type="submit">Update Item</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateItem
