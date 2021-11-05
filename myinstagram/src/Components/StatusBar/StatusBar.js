import { Avatar } from "@material-ui/core";
import React from "react";
import "./StatusBar.css";
import status_img from "../../images/pp1.png";
class StatusBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        username: "ankur_shukla",
        ImageURL: "../../images/pp1.png",
      },
      {
        username: "parashuram",
        ImageURL: "../../images/pp1.png",
      },
      {
        username: "parashuram",
        ImageURL: "../../images/pp1.png",
      },
      {
        username: "parashuram",
        ImageURL: "../../images/pp1.png",
      },
      {
        username: "parashuram",
        ImageURL: "../../images/pp1.png",
      },
    ];
    this.setState({ statusList: data });
  };
  render() {
    return (
      <div>
        <div className="statusbar_container">
            {
          this.state.statusList.map((item,index)=>(
          <div className="status">
            <Avatar className="statusbar_status" src={status_img} />
            <div className="statusbar_text">{item.username}</div>
          </div>
          ) )
  }
        </div>
      </div>
    );
  }
}

export default StatusBar;
