import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountry: countryAndCapitalsList[0]}

  onChangeCapital = event => {
    const selectedCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === event.target.value,
    )
    this.setState({activeCountry: selectedCountry})
  }

  render() {
    const {activeCountry} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <div>
            <h1 className="heading">Countries and Capitals</h1>
            <div className="select-container">
              <select
                className="select"
                onChange={this.onChangeCapital}
                value={activeCountry.id}
              >
                {countryAndCapitalsList.map(eachCountry => (
                  <option
                    key={eachCountry.id}
                    value={eachCountry.id}
                    className="option"
                  >
                    {eachCountry.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="para"> is capital of which country?</p>
            </div>
            <h1 className="country">{activeCountry.country}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
