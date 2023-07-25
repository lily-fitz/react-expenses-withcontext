import { useContext } from 'react'
import ListItem from './ListItem'
import { ExpensesContext } from '../Context'

function ExpenseList() {
  const { expenses } = useContext(ExpensesContext)

  return (
    <ul id='expense-list'>
      {expenses.map((expense) => (
        <ListItem key={expense.id} expense={expense} />
      ))}
    </ul>
  )
}

export default ExpenseList
