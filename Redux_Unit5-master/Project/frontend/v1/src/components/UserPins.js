import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/UserPins.css'

class UserPins extends React.Component {
  constructor() {
    super();
    this.state = {
      allUserPins: []
    }
  }

componentDidMount() {
  axios.get("/pins/" + this.props.match.params.id + "/pins")
  .then(response => {
    this.setState({
      allUserPins: response.data.data })
  })
}

  render() {
    const { allUserPins } = this.state
    const getUserPins = allUserPins.map((pins) => {
      return <Link to={`/pins/${pins.id}`}><img src={pins.pin_url} alt="" className="allPins"/></Link>
    })
    return(

        <div className="allUserImgs">

        {getUserPins}

        </div>

    )
  }
}






export default UserPins
