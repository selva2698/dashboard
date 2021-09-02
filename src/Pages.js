import React from "react";
import "./Pages.css"
import { Link } from "react-router-dom";
import { faAngleDown, faAngleRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
export function Pages({ expand }) {
  //creates an anchor element when popup is open
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // styling the popup options
  const Styledmenu = withStyles(() => ({
    root: {
      fontSize: "13px",
      backgroundColor: "white",
      color: "black",
      "&:focus": {
        backgroundColor: "white",
        color: "black"
      }
    }
  }))(MenuItem);
  return (
    <>
    {/* alignment of side navbar changes when expand value toggles  between true/false */}
      <div
        className="pages cursor"
        style={{ flexDirection: !expand ? "column" : "row" }}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span className="nav-icon">
          <FontAwesomeIcon icon={faFolder} size="1x" />
        </span>
        Pages
        {/* hides the right arrow when the popup is open */}
        <span className="arrow" style={{ display: !expand ? "none" : "" }}>
          <span style={{ display: anchorEl ? "none" : "" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          {/* hides the down arrow when the popup is closed */}
          <span style={{ display: !anchorEl ? "none" : "" }}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </span>
      </div>

      <Menu
        className="menu"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="dropdown-menu-header">LOGIN SCREENS</div>
        <Link className="link" to="/Login">
          <Styledmenu onClick={handleClose} className="dropdown-menu">
            Login
          </Styledmenu>
        </Link>
        <div className="dropdown-menu-header">OTHER PAGES</div>
        <Link className="link" to="/404page">
          <Styledmenu onClick={handleClose} className="dropdown-menu">
            404 page
          </Styledmenu>
        </Link>
        <Link className="link" to="/Blankpage">
          <Styledmenu onClick={handleClose} className="dropdown-menu">
            Blank page
          </Styledmenu>
        </Link>
      </Menu>
    </>
  );
}
//creates login page
export function Login() {
  return (
    <div className="loginpage">
      <div>
        <img className="loginimage" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODQyNDE1NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" alt="image_">
        </img>
      </div>
      <div className="logincontainer">
        <div className="welcome">Welcome Back!</div>
        <input type="text" placeholder="Enter Email Adress..." className="logininput" /><br />
        <input type="password" placeholder="Password" className="logininput" /><br />
        <div className="remenbercheck"><input type="checkbox" /> Remember me</div><br />
        <button className="loginbutton">Login</button>
        <div className="loginlinebreak"><hr /></div>
        <button className="loginbutton googlelogin">
        <FontAwesomeIcon icon={faGoogle} size="1x" /> Login with Google</button><br />
        <button className="loginbutton facebooklogin">
        <FontAwesomeIcon icon={faFacebookF} size="1x" /> Login with Facebook</button>
        <div className="loginlinebreak"><hr /></div>
        <div className="loginfooter">
          <div>Forgot Password?</div><br />
          <div>Create an Account!</div>
        </div>
      </div>
    </div>
  );
}
//creates error page

export function Errorpage() {
  return (
    <div className="container container404">
      <div className="content404">
        <div className="animation404">404</div>
        <div className="description404">Page Not Found</div>
        <div className="glitchtext404">It looks like you found a glitch in the matrix...</div>
        <Link to="/Dashboard">← Back to Dashboard</Link>
      </div>

    </div>
  )
}
//creates blank page
export function Blankpage() {
  return (
    <div className="container">
      <div className="utilities-title">Blank Page</div>
    </div>
  );
}
