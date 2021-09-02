import { faFacebook, faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleRight, faArrowRight, faCog, faCheck, faCheckCircle, faExclamationCircle, faExclamationTriangle, faFlag, faInfoCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Components.css";
import { Topcards } from "./App";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {Link} from "react-router-dom";
export function Components({ expand }) {
    //opens a popup containing options, when the button is clicked
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    //styling the popup options
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
        <div
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <div
            className="components cursor"
            style={{ flexDirection: !expand ? "column" : "row" }}
          >
            <span className="nav-icon">
              <FontAwesomeIcon icon={faCog} size="1x" />
            </span>
            Components
            <span className="arrow" style={{ display: !expand ? "none" : "" }}>
              <span style={{ display: anchorEl ? "none" : "" }}>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span style={{ display: !anchorEl ? "none" : "" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </span>
          </div>
        </div>
        <Menu
          className="menu"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className="dropdown-menu-header">CUSTOM COMPONENTS:</div>
          {/* creates a page depending on the chosen option */}
          <Link className="link" to="/Buttons">
            <Styledmenu onClick={handleClose} className="dropdown-menu">
              Buttons
            </Styledmenu>
          </Link>
  
          <Link className="link" to="/Cards">
            <Styledmenu onClick={handleClose} className="dropdown-menu">
              Cards{" "}
            </Styledmenu>
          </Link>
        </Menu>
      </>
    );
  }
//creates buttons page
export function Buttons() {
    return (
        <div className="container">
            <div className="Components-Buttons-title">Buttons</div>
            <div className="inlineitems">
                <div className="inlineitem1">
                    <div className="circle-buttons-container">
                        <Circlebuttons />
                    </div>
                    <div className="brand-buttons-container">
                        <Brandbuttons />
                    </div>
                </div>
                <div className="inlineitem2">
                    <div className="split-buttons-container">
                        <Splitbuttons />
                    </div>
                </div>

            </div>

        </div>
    );
}
// creates a card containing circular buttons
function Circlebuttons() {
    const icons = [
        { name: faFacebook, code: "#4e73df" },
        { name: faCheckCircle, code: "#1cc88a" },
        { name: faInfoCircle, code: "#36b9cc" },
        { name: faExclamationCircle, code: "#f6c23e" },
        { name: faTrash, code: "#e74a3b" }
    ];
    return (
        <>
            <div className="card-title">Circle Buttons</div>
            <div className="circle-buttons-content">
                <div>Use Font Awesome Icons (included with this theme package) along
                    with the circle buttons as shown in the examples below!</div>
                <div className="circle-buttons-title">.btn-circle</div>
                {/* creating different sized circlar buttons */}
                {icons.map(({ name, code }) =>
                    <FontAwesomeIcon icon={name} size={"2x"} color={code} className="circle-buttons" />
                )}
                <div className="circle-buttons-title">.btn-circle .btn-sm</div>
                {icons.map(({ name, code }) =>
                    <FontAwesomeIcon icon={name} size={"lg"} color={code} className="circle-buttons" />
                )}
                <div className="circle-buttons-title">.btn-circle .btn-lg</div>
                {icons.map(({ name, code }) =>
                    <FontAwesomeIcon icon={name} size={"3x"} color={code} className="circle-buttons" />
                )}
            </div>
        </>
    )
}
//creates login buttons for google and facebook
function Brandbuttons() {
    return (
        <>
            <div className="card-title">Brand Buttons</div>
            <div className="brand-buttons-content">
                <div>Google and Facebook buttons are available featuring each company's respective brand color.
                    They are used on the user login and registration pages.
                </div>
                <p>You can create more custom buttons by adding anew color variable in the
                    <span className="redtext"> _variables.scss</span> file and then using the Bootstrap button variant
                    mixin to create a new style, as demonstrated in the
                    <span className="redtext"> _buttons.scss</span> file.
                </p>
                <p href="#" className="googlebutton"><FontAwesomeIcon icon={faGoogle} size="1x" />
                    .btn-google</p>
                <p className="facebookbutton"><FontAwesomeIcon icon={faFacebookF} size="1x" />
                    .btn-facebook</p>
            </div>
        </>
    )
}
//creates different icon buttons
function Splitbuttons() {
    const icons = [
        { name: faFlag, code: "#4e73df", title: "Split Button Primary" },
        { name: faCheck, code: "#1cc88a", title: "Split Button Success" },
        { name: faInfoCircle, code: "#36b9cc", title: "Split Button Info" },
        { name: faExclamationTriangle, code: "#f6c23e", title: "Split Button Warning" },
        { name: faTrash, code: "#e74a3b", title: "Split Button Danger" },
        { name: faArrowRight, code: "#6c6d6b", title: "Split Button Secondary" },
        { name: faArrowRight, code: "#E5F1EF", title: "Split Button Light" }
    ];
    return (
        <>
            <div className="card-title">Split Buttons with Icon</div>
            <div className="split-buttons-content">
                <div>
                    Works with any button colors, just use the  <span className="redtext"> .btn-icon-split</span> class and the
                    markup in the examples below. The examples below also use the <span className="redtext"> .text-white-50 </span>
                    helper class on the icons for additional styling, but it is not required.
                </div>
                {icons.map(({ name, code, title }) =>
                    <div className="spliticonbuttondiv">
                        <p style={{ "backgroundColor": code }} className="spliticonbutton" >
                            {/*text and icon will be black for the button with white background */}
                            <FontAwesomeIcon icon={name}
                                color={title === "Split Button Light" ? "black" : ""} className="split-icon" />
                            <span style={{ "color": title === "Split Button Light" ? "black" : "" }}>{title}</span>
                        </p>
                    </div>
                )}
                <br />
                <div>Also works with small and large button classes!</div>
                <div className="spliticonbuttondiv">
                    <p className="spliticonbutton" >
                        <FontAwesomeIcon icon={faFlag} className="split-icon" size="1x" />
                        <span >Split Button Small</span>
                    </p>
                </div>
                <div className="spliticonbuttondiv largeflag">
                    <p className="spliticonbutton" >
                        <FontAwesomeIcon icon={faFlag} className="split-icon " />
                        <span >Split Button Large</span>
                    </p>
                </div>

            </div>
        </>
    )
}
//creates cards
export function Cards() {
    const headercards = [
        {
            cardname: "EARNINGS (MONTHLY)",
            cardvalue: "$40,000",
            cardicon: "1"
        },
        {
            cardname: "EARNINGS (ANNUAL)",
            cardvalue: "$215,000",
            cardicon: "2"
        },
        {
            cardname: "TASKS",
            cardvalue: "50%",
            cardicon: "3"
        },
        {
            cardname: "PENDING REQUESTS",
            cardvalue: "18",
            cardicon: "4"
        }
    ];
    return (
        <>
            <div className="container">

                <div className="Components-Cards-title">Cards</div>
                <div className="top-cards-container">
                    {headercards.map(({ cardname, cardvalue, cardicon }) => (
                        <Topcards name={cardname} value={cardvalue} pic={cardicon} />
                    ))}
                </div>
                <div className="inlineitems">
                    <div className="inlineitem1">
                        <div className="componentcardcontainer" > <Defaultcardexample /> </div>
                        <div className="componentcardcontainer" > <Basiccardexample /></div>
                    </div>
                    <div className="inlineitem2">
                        <div className="componentcardcontainer"> <Dropdowncardexample /> </div>
                        <div className="componentcardcontainer" > <Collapsablecardexample /></div>
                    </div>

                </div>

            </div>
        </>
    )
}

function Defaultcardexample() {
    return (
        <>
            <div className="card-title defaultcardtitle">Default Card Example</div>
            <div className="Components-card-content">
                This card uses Bootstrap's default styling with no utility classes added. Global styles are the only
                things modifying the look and feel of this default card example.
            </div>
        </>
    )
}
function Basiccardexample() {
    return (
        <>
            <div className="card-title">Basic Card Example</div>
            <div className="Components-card-content">
                The styling for this basic card example is created by using default Bootstrap utility classes. By using
                utility classes, the style of the card component can be easily modified with no need for any custom CSS!
            </div>
        </>
    )
}
function Dropdowncardexample() {
    //popup options for dropdown button
    const options = ["None", "Action", "Another action", "Something else here"];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //styling popup options
    const StyledMenuItem = withStyles(() => ({
        root: {
            fontSize: "13px",
            "&:focus": {
                backgroundColor: "blue",
                color: "white"
            }
        }
    }))(MenuItem);
    return (
        <>
            <div className="chart-header">
                <div className="card-title">Dropdown Card Example</div>
                <div>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        id="dropdown-button"
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <div className="popup">
                            <div className="dropdown-menu-header">DROPDOWN HEADER</div>
                            {/* hides the "none" option, it is the default value */}
                            {options.map((option) => (
                                <div style={{ display: option === "None" ? "none" : "block" }}>
                                    <p className="dropdown-menu" href="#">
                                        <StyledMenuItem key={option} onClick={handleClose}>
                                            {option}
                                        </StyledMenuItem>
                                    </p>
                                    {/* creates horizontal line after "another action"  option*/}
                                    <div
                                        style={{
                                            display: option === "Another action" ? "block" : "none",
                                            width: "11rem"
                                        }}
                                    >
                                        {" "}
                                        <hr />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Menu>
                </div>
            </div>
            <div className="Components-card-content">
                Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this
                dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to
                toggle a dropdown menu.
            </div>
        </>
    )
}
function Collapsablecardexample() {
    const [expand, setexpand] = useState(true);
    return (
        <>
        {/* expand value toggles between true/false when the button is clicked */}
            <div className="chart-header collapsablecardheader" onClick={() => setexpand(!expand)}>
                <div className="card-title">Collapsable Card Example</div>
                {/* hides the right arrow when expand value is true */}
                <div style={{ "display": expand ? "none" : "block" }}>
                    <IconButton  aria-controls="long-menu" id="dropdown-button">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </IconButton>

                </div>
                {/* hides the down arrow when the expand value is false */}
                <div style={{ "display": !expand ? "none" : "block" }}>
                    <IconButton  aria-controls="long-menu" id="dropdown-button">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </IconButton>

                        
                </div>
            </div>
            {/* shows/hides the content when the expand value toggles between true/false */}
            <div className="Components-card-content" style={{ "display": !expand ? "none" : "block" }}>
                This is a collapsable card example using Bootstrap's built in
                collapse functionality. Click on the card header to see the card body collapse and expand!
            </div>
        </>
    )
}