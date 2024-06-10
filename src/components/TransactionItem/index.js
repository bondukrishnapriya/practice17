// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
