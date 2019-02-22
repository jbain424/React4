export const Pins = ({onePin}) => {
  return(
    <div id="whitebox">
      <div className="pinContainer" id="pinBackground">
        <div id="pinImg">
        <img id="img" src={this.props.onePin.pin_url} alt="" width="500px" height="auto"/>
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


  )
}
