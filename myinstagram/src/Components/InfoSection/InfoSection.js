import { Avatar } from "@material-ui/core";
import React from "react";
import pp1 from "../../images/pp1.png";
import "./InfoSection.css"
class InfoSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Infosection_container">
                <Avatar className="Info_image" src={pp1}/>
                <div className="info_gyaan">
                <div style={{"fontWeight":"bold"}}>Username</div>
                <div>Description</div>
                </div>
                
            </div>
         );
    }
}
 
export default InfoSection;