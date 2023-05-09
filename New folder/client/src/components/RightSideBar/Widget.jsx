import React from "react";
import RightSideBar from "./RightSideBar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import icon from "../../assets/icon.png";
// import blacklogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>Can Stack Overflow save the day?</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>Let’s talk large language models (Ep. 546)</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>We've added a "Necessary cookies only" option to the cookie consent popup</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>
The Stack Exchange reputation system: What's working? What's not?</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={icon} alt="icon" width="18" />
          <p>
Launching the CI/CD and R Collectives and community editing features for...</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={icon} alt="icon" width="18" />
          <p>
Staging Ground Beta 1 Recap, and Reviewers needed for Beta 2</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={icon} alt="icon" width="18" />
          <p>
Temporary policy: ChatGPT is banned</p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-3">
        <div className="right-sidebar-div-2">
          {/* <img src={pen} alt="pen" width="18" /> */}
          <p>12</p> 
          <p>

Establishing a canonical for shadowing builtins (especially causing...
          </p>
</div>
<div className="right-sidebar-div-2">

          <p>13</p> 
          <p>

Establishing a canonical for shadowing builtins (especially causing...
          </p>
</div>

<div className="right-sidebar-div-2">

          <p>14</p> 
          <p>

Establishing a canonical for shadowing builtins (especially causing...
          </p>
</div>

<div className="right-sidebar-div-2">

          <p>15</p> 
          <p>

Establishing a canonical for shadowing builtins (especially causing...
          </p>
          {/* </div> */}

        </div>

      </div>
    </div>
  );
};

export default Widget;

//
// The Stack Exchange reputation system: What's working? What's not?
