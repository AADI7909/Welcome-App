// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  SubscribeBtn = () => {
    const {isSubscribe} = this.state
    {
      isSubscribe && <button>Subscribed</button>
    }
    {
      !isSubscribe && <button>Subscribe</button>
    }
  }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="btn-card" onClick={this.SubscribeBtn}>
          Subscribe
        </button>
      </div>
    )
  }
}

export default Welcome
