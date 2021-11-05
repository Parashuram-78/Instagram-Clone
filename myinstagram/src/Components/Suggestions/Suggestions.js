import { Avatar } from "@material-ui/core";
import React from "react";
import pp1 from "../../images/pp1.png";
import "./Suggestions.css";
class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="suggestions">
          <div className="suggestions__header">Suggestions for you</div>
          <div className="suggestion_body">
            <div className="suggestion_body__person">
              <Avatar src={pp1} />
              <div className="Suggestion_frnd">Username</div>
            </div>
            <div className="suggestion_body__person">
              <Avatar src={pp1} />
              <div className="Suggestion_frnd">Username</div>
            </div>
            <div className="suggestion_body__person">
              <Avatar src={pp1} />
              <div className="Suggestion_frnd">Username</div>
            </div>
            <div className="suggestion_body__person">
              <Avatar src={pp1} />
              <div className="Suggestion_frnd">Username</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;
