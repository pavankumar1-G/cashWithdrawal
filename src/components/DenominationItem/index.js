// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-items">
      <button
        className="denomination-btn"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
