import { useState, useContext } from 'react'
import { ExpensesContext } from '../Context'

function ExpenseForm() {
  const { addNewExpense } = useContext(ExpensesContext)

  const [newItem, setNewItem] = useState('')
  const [newCost, setNewCost] = useState('')

  const handleItemChange = (e) => {
    setNewItem(e.target.value)
  }

  const handleCostChange = (e) => {
    setNewCost(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewExpense(newItem, newCost)
    setNewItem('')
    setNewCost('')
  }

  return (
    <div id='expense-form-container'>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} id='expense-form'>
        <label>
          Item
          <input
            type='text'
            name='item'
            value={newItem}
            onChange={handleItemChange}
          />
        </label>
        <label>
          Cost (USD)
          <input
            type='text'
            name='cost'
            value={newCost}
            onChange={handleCostChange}
          />
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default ExpenseForm
