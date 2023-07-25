import { useState, useContext } from 'react'
import { ExpensesContext } from '../Context'

function ListItem({ expense }) {
  const { deleteExpense, handleUpdate } = useContext(ExpensesContext)

  const [editmode, setEditmode] = useState(false)
  const [updatedItem, setUpdatedItem] = useState(expense.item)

  const handleChange = (e) => {
    setUpdatedItem(e.target.value)
  }

  const cancelEdit = () => {
    setEditmode(false)
    setUpdatedItem(expense.item)
  }

  const editExpense = () => {
    setEditmode(true)
  }

  const saveExpense = () => {
    setEditmode(false)
    handleUpdate(expense.id, updatedItem)
  }

  return (
    <li>
      {editmode ? (
        <>
          <input
            className='item'
            type='text'
            value={updatedItem}
            onChange={handleChange}
          />
          <span className='cost'>${parseFloat(expense.cost).toFixed(2)}</span>
          <button type='button' onClick={cancelEdit}>
            Cancel
          </button>
          <button type='button' onClick={saveExpense}>
            Save
          </button>
        </>
      ) : (
        <>
          <span className='item'>{expense.item}</span>
          <span className='cost'>${parseFloat(expense.cost).toFixed(2)}</span>
          <button type='button' onClick={() => deleteExpense(expense.id)}>
            Delete
          </button>
          <button type='button' onClick={editExpense}>
            Edit
          </button>
        </>
      )}
    </li>
  )
}

export default ListItem
