import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { thunkDeleteItem, thunkGetAllItems } from "../../store/items"

const DeleteItem = ({item}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleDeleteItem = async (e) => {
        e.preventDefault()
        await dispatch(thunkDeleteItem(item.id))
        await dispatch(thunkGetAllItems(item.restaurant_id))
        closeModal()
    }
    const handleCancelClick = async (e) => {
        closeModal()
    }
    return(
        <>
            <div className="delete-restaurant-container">
                <div>
                    <h2>Delete Item</h2>
                    <h4>Are you sure you want to delete this Item?</h4>
                </div>

                <div>
                    <button className='cancel-delete-button' onClick={handleCancelClick}>Cancel</button>
                    <button className='delete-button' onClick={handleDeleteItem}>Delete Item</button>
                </div>
            </div>
        </>
    )
}

export default DeleteItem
