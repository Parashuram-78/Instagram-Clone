import React from 'react';
import Post from '../Post/Post';
import "./MainPage.css"
class MainPage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        posts: [],
    }
}
componentDidMount() {
    this.getpostarray();
}
getpostarray=()=>{
let data=[
    {
        "postid":"123456",
        //"postURL":"";
        "Username":"Soumya",
        "timestamp":"123",
        "likes":"123"

    }
];
    this.setState({posts:data});
}
    render() { 
        return <div>
            {
                this.state.posts.map((post,index)=>(
                    <Post postid={post.postid} username={post.Username} timestamp={post.timestamp} likes={post.likes}  />
                ))
            }
        </div>;
    }
}
 
export default MainPage;

