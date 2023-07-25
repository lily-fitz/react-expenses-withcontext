import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'

function Title() {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faCreditCard} /> Expense Tracker
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
        reiciendis?
      </p>
    </div>
  )
}

export default Title
