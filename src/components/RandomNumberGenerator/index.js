import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_img1">
        <div className="container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onButton}>
            Generate
          </button>
          <p className="countColor">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
