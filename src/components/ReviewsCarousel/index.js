import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {value: 0}

  beforeImageArrow = () => {
    const {value} = this.state
    if (value === 0) {
      this.setState({value: 0})
    } else {
      this.setState(prevState => ({value: prevState.value - 1}))
    }
  }

  afterImageArrow = () => {
    const {value} = this.state
    if (value === 3) {
      this.setState({value: 3})
    } else {
      this.setState(prevState => ({value: prevState.value + 1}))
    }
  }

  render() {
    const {value} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[value]

    return (
      <div className="bg-container">
        <div className="inner-container">
          <button
            className="button"
            type="button"
            onClick={this.beforeImageArrow}
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="user-profile-container">
            <h1 className="heading">Reviews</h1>
            <img src={imgUrl} className="profile-photo" alt={username} />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="button"
            type="button"
            onClick={this.afterImageArrow}
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
