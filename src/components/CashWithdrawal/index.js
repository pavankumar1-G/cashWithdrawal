// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {yourBalance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      yourBalance: prevState.yourBalance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {yourBalance} = this.state
    const name = 'Sarah Williams'
    const initialString = name.slice(0, 1)

    return (
      <div className="cash-withdrawal-bg-container">
        <div className="actual-content-container">
          <div className="profile-container">
            <div className="initialString-container">
              <p className="profile">{initialString}</p>
            </div>
            <h1 className="Name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="Rupees">
              {yourBalance}
              <br />

              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationsDetails={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
