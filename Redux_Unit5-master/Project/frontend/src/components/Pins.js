import React from 'react';
import axios from 'axios';
import '../css/Pins.css';

class Pins extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    onePin: []


    }
  }

  componentDidMount(){
    axios.get("/pins/" + this.props.match.params.id)
    .then(response => {
      this.setState({
        onePin: response.data.data

      })
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <>
      <div id="whitebox">
        <div className="pinContainer" id="pinBackground">
          <div id="pinImg">
          <img id="img" src={this.state.onePin.pin_url} alt="" width="500px" height="auto"/>
          </div>

          <div className="pinName">
              {this.state.onePin.pin_name}
          </div>

          <div className="pinCaption">
              {this.state.onePin.pin_caption}

          </div>

          <div id="hairline"> <hr></hr> </div>

          <div className="psAndComs">
              <h2>Photos and Comments</h2>
          </div>

          <div className="pinComment">
            <p> Share feedback, ask a question or give a high five!
            </p>
            <br></br>
            <input id="input" type="text" name="" placeholder="Add Comment"></input>
          </div>
        </div>
      </div>

    </>
    )
  }
}

export default Pins
