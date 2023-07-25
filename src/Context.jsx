import { createContext, useState } from 'react'

const ExpensesContext = createContext(null)

function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      item: 'groceries',
      cost: 100,
    },
  ])

  const deleteExpense = (expenseID) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseID))
  }

  const handleUpdate = (expenseID, updatedItem) => {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id == expenseID) {
        return (expense = { ...expense, item: updatedItem })
      } else {
        return expense
      }
    })

    setExpenses(updatedExpenses)
  }

  const addNewExpense = (newItem, newCost) => {
    newCost = parseFloat(newCost)

    const newExpense = {
      id: expenses.length + 1,
      item: newItem,
      cost: newCost,
    }

    setExpenses([...expenses, newExpense])
  }

  return (
    <ExpensesContext.Provider
      value={{ expenses, deleteExpense, handleUpdate, addNewExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export { ExpensesContext, ExpensesProvider }
