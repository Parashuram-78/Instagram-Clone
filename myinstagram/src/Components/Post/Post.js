import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
 import post_image from "../../images/post.jpg";
import love from "../../images/love.svg";
import Comment from "../../images/comment.svg";
import share from "../../images/share.svg";
//import pp from '../../images/'
class Post extends React.Component {
    constructor(props){
        super(props);
        this.state={
            commentList:[]
        }
    }
        componentDidMount(){
            this.getComment();
        }
    getComment=()=>{
    let data = {
        "Username":"Ankur",
        "commentID":"1",
        "TimeStamp":"1",
        "description":"This is a comment"
        }
        this.setState({commentList:[data]})
    }
    render() { 
        return <div className="post_container">
            <div className="post_header">
                <Avatar className="post_image"src={this.props.profileimage} alt="image"/>
                <div className="Post_username">{this.props.username}</div>
            </div>
            <div>
                <img  src={post_image}  width = "615px"alt="image"/>
            </div>
            <div>
                <div style={{"marginLeft":"10px"}}>
                    <img src={love} alt="imagei" className="post_reactimage" />
                    <img src={Comment} alt="imagei" className="post_reactimage" />
                    <img src={share} alt="imagei" className="post_reactimage" />
                </div>
                <div className="post_like" style={{"fontWeight":"bold", "marginLeft":"10px"}}>
                    {this.props.likes} likes
                </div>
            </div>
            <div>
                {
                    this.state.commentList.map((item,index)=>(
                        <div className="postcomment">{item.Username}:{item.description}</div>
                        ))
                }
                <input className="commentbox" type="text" placeholder="Add a comment..."/>
            </div>
        </div>;
    }
}
 
export default Post;