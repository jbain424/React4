import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../css/Boards.css";

class Boards extends React.Component {
  constructor() {
    super();
    this.state = {
      boards: [],
      pins: []
    };
  }

  componentDidMount() {
    this.getBoards();
    this.getPinsFromUsers();
  }

  getBoards = () => {
    axios
      .get("/boards/" + this.props.match.params.id + "/boards")
      .then(response => {
        this.setState({
          boards: response.data.data
        });
      });
  };

  getPinsFromUsers = () => {
    axios
      .get("/pins/" + this.props.match.params.id + "/pins")
      .then(response => {
        this.setState({
          pins: response.data.data
        });
      });
  };

  render() {
    const { boards } = this.state;
    const renderBoards = boards.map(board => {

      return <h1 key={board.id}>{board.board_name}</h1>;
    });

    return(
      <>
      {renderBoards}
      </>

    )
  }
}

export default Boards;
