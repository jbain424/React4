import React from 'react'
import axios from 'axios'
import '../css/Home.css'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  state = {
    pinImg: [],
    pin_name: ""

  }

  componentDidMount(){
    axios.get("/pins")
    .then(response => {
      this.setState({
        pinImg: response.data.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    const { pinImg } = this.state
    const postPins = pinImg.map((pin) =>{
      return <Link to={"/pins/" + pin.id }><img className="homeImg" alt="" src={pin.pin_url}/></Link>
    })
    return (
      <div className="homeContainer">
          {postPins}
      </div>
    )
  }
}

export default Home
