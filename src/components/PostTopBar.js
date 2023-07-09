import { Component } from "react";

class PostTopBar extends Component{
  render(){
    return <div className="post_topbar">
    <div className="usy-dt">
      <img src="./images/saroj-pic.jpeg" alt="" />
      <div className="usy-name">
        <h3>Saroj Shakya</h3>
        <span>3 min ago</span>
      </div>
    </div>
    <div className="ed-opts">
      <a
        href="./index.html#"
        title=""
        className="ed-opts-open"
        ><i className="la la-ellipsis-v"></i
      ></a>
      <ul className="ed-options">
        <li>
          <a href="./index.html#" title="">Edit Post</a>
        </li>
        <li>
          <a href="./index.html#" title="">Unsaved</a>
        </li>
        <li>
          <a href="./index.html#" title="">Unbid</a>
        </li>
        <li>
          <a href="./index.html#" title="">Close</a>
        </li>
        <li><a href="./index.html#" title="">Hide</a></li>
      </ul>
    </div>
  </div>
  }
}
 export default PostTopBar;