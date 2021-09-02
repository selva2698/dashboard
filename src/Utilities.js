import React from "react";
import "./Utilities.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Link} from "react-router-dom";
import { faAngleDown, faAngleRight, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Utilities({ expand }) {
  //creates anchor element when the button is clicked
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
      <div
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {/*alignment changes when the expand arrow of side navbar is clicked*/}
        <div
          className="utilities cursor"
          style={{ flexDirection: !expand ? "column" : "row" }}
        >
          <span className="nav-icon">
            <FontAwesomeIcon icon={faWrench} size="1x" />
          </span>
          Utilities
          {/* right arrow is hidden when the side navbar is  expanded */}
          <span className="arrow" style={{ display: !expand ? "none" : "" }}>
            <span style={{ display: anchorEl ? "none" : "" }}>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
            {/* down arrow is hidden when the side navbar is not expanded */}
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
        {/*closes the popup when an option is chosen  */}
        <div className="dropdown-menu-header">CUSTOM UTILITIES</div>
        <Link className="link" to="/Navcolors">
          <Styledmenu onClick={handleClose} className="dropdown-menu">
            navcolors
          </Styledmenu>
        </Link>
        <Link className="link" to="/Borders">
          <Styledmenu onClick={handleClose} className="dropdown-menu">
            Borders
          </Styledmenu>
        </Link>
        <Link className="link" to="/Animations">
          <Styledmenu onClick={handleClose} className="dropdown-menu">
            Animations
          </Styledmenu>
        </Link>
        <Link className="link" to="/Other">
          <Styledmenu onClick={handleClose} className="dropdown-menu">
            Other
          </Styledmenu>
        </Link>
      </Menu>
    </>
  );
}
//creates 3 cards
export function Navcolors() {
  const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container">
      <div className="utilities-title">Color Utilities</div>
      <div>
        Bootstrap's default utility classes can be found on the official Bootstrap Documentation page.
        The custom utilities below were created to extend this theme past the default utility classes built into
        Bootstrap's framework.
      </div>
      <div className="utilities-cards-container">
        <CustomtextFont numarray={numarray} />
        <Custombackgroundgradient />
        <Customgrayscalebackground numarray={numarray} />
      </div>
    </div>
  );
}
function CustomtextFont({ numarray }) {
  //value varies from 1 to 9
  let textarray = numarray.map((num) => `.text-gray-${num}00`);
  return (
    <div className="customtextfontcards">
      <div className="customcard">
        <div className="card-title">Custom Text Color Utilities</div>
        <div className="utilities-card-content">
          <div className="customtext-graybackground">
            {/*choosing first 4 values and making background black, text white */}
            {textarray.filter((text) => +text[11] <= 4)
              .map((text) => <div className="customtextcontent" style={{ opacity: 1 - (+text[11] / 10) }}>
                {text}
              </div>
              )
            }
          </div>
          {/* choosing next values and making background white, text black */}
          <div className="customtext-whitebackground">
            {textarray.filter((text) => +text[11] > 4)
              .map((text) => <div className="customtextcontent" style={{ opacity: +text[11] / 10 }}>
                {text}
              </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="customcard">
        <div className="card-title">Custom Font Size Utilities</div>
        <div className="utilities-card-content">
          <p className="xstext">.text-xs</p>
          <p className="lgtext">.text-lg</p>
        </div>
      </div>
    </div>
  )
}
//creates different color backgrounds
function Custombackgroundgradient() {
  const colors = [
    { name: "Primary", code: "#4e73df" },
    { name: "Secondary", code: "#858796" },
    { name: "Success", code: "#1cc88a" },
    { name: "Info", code: "#36b9cc" },
    { name: "Warning", code: "#f6c23e" },
    { name: "Danger", code: "#e74a3b" },
    { name: "Light", code: "rgb(189, 187, 187)" },
    { name: "Dark", code: "#5a5c69" }
  ];
  return (
    <div className="customcard">
      <div className="card-title">Custom Background Gradient Utilities</div>
      <div className="utilities-card-content">
        {colors.map((color) =>
          <div style={{ background: color.code }} className="customgradientcontent">
            {`.bg-gradient-${color.name}`}
          </div>)}
      </div>
    </div>
  )
}
//creating gray background
function Customgrayscalebackground({ numarray }) {
  //value changes from 1 to 9
  const textarray = numarray.map((num) => `.bg-gray-${num}00`);
  return (
    <div className="customcard">
      <div className="card-title">Custom Grayscale Background Utilities</div>
      <div className="utilities-card-content">
{/*opacity changes for each text */}
        {
          textarray.map((text) => <div className="customgrayscale-whitebackground" style={{ opacity: (+text[9] / 10) }}>
            {text}
          </div>
          )
        }
      </div>

    </div>
  )
}
//creating different colored borders
export function Borders() {
  const colors = [
    { name: "Primary", code: "#4e73df" },
    { name: "Secondary", code: "#858796" },
    { name: "Success", code: "#1cc88a" },
    { name: "Info", code: "#36b9cc" },
    { name: "Warning", code: "#f6c23e" },
    { name: "Danger", code: "#e74a3b" },
    { name: "Dark", code: "#5a5c69" }
  ];
  return (
    <div className="container">
      <div className="utilities-title">Border Utilities</div>
      <p>Bootstrap's default utility classes can be found on the official <a href="#">Bootstrap Documentation</a> page.
        The custom utilities below were created to extend this theme past the default utility classes built into
        Bootstrap's framework.</p>
      <div className="inlineitems">
        <div className="inlineitem1">
          {colors.map((color) =>
            <div className=" utilities-border-card" style={{ borderLeft: `5px solid ${color.code}` }}>
              .border-left-{color.name}
            </div>)}
        </div>
        <div className="inlineitem2">
          {colors.map((color) =>
            <div className=" utilities-border-card" style={{ borderBottom: `5px solid ${color.code}` }}>
              .border-bottom-{color.name}
            </div>)}
        </div>
      </div>
    </div>
  )
}
export function Animations() {
  //popup options
  const options = ["None", "Action", "Another action", "Something else here"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
//creates anchor element when popup is opened
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
    <div className="container">
      <div className="utilities-title">Animation Utilities</div>
      <p>Bootstrap's default utility classes can be found on the official <a href="#">Bootstrap Documentation</a> page.
        The custom utilities below were created to extend this theme past the default utility classes built into
        Bootstrap's framework.</p>
      <div className="inlineitems">
        <div className="inlineitem1 customcard">
          <div className="card-title">Grow In Animation Utilty</div>
          <div className="utilities-card-content">
            <p className="redtext">.animated--grow-in</p>
            <div className="utilitynavtitle">Navbar Dropdown Example:</div>
            <div className="chart-header">
              <a className="utilitynavheader" href="#">Navbar</a>
              <div>
                {/* opens a popup when this button is clicked */}
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <div className="utilitynavdropdown">Dropdown</div><ArrowDropDownIcon />
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
                    {options.map((option) => (
                      <div style={{ display: option === "None" ? "none" : "block" }}>
                        <a className="dropdown-menu" href="#">
                          <StyledMenuItem key={option} onClick={handleClose}>
                            {option}
                          </StyledMenuItem>
                        </a>
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
            <p className="animationutilitytext">Note: This utility animates the CSS transform property, meaning it will
              override any existing transforms on an element being animated! In this theme, the grow in animation is only
              being used on dropdowns within the navbar.</p>
          </div>
        </div>
        {/* class inline items will display the items as inline block */}
        <div className="inlineitem2 customcard">
          <div className="card-title">Fade In Animation Utilty</div>
          <div className="utilities-card-content">
            <p className="redtext">.animated--fade-in</p>
            <div className="utilitynavtitle">Navbar Dropdown Example:</div>
            <div className="chart-header">
              <a className="utilitynavheader" href="#">Navbar</a>
              {/* creating a dropdown button */}
              <div>

                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <div className="utilitynavdropdown">Dropdown</div><ArrowDropDownIcon />
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
                    {options.map((option) => (
                      <div style={{ display: option === "None" ? "none" : "block" }}>
                        <a className="dropdown-menu" href="#">
                          <StyledMenuItem key={option} onClick={handleClose}>
                            {option}
                          </StyledMenuItem>
                        </a>
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
            <p className="animationutilitytext">Dropdown Button Example:</p>
            {/* creating another dropdown button */}
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
              id="utilitydropdownexample"
            >
              <div className="utilitynavdropdown">Dropdown</div><ArrowDropDownIcon />
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
                {options.map((option) => (
                  <div style={{ display: option === "None" ? "none" : "block" }}>
                    <a className="dropdown-menu" href="#">
                      <StyledMenuItem key={option} onClick={handleClose}>
                        {option}
                      </StyledMenuItem>
                    </a>
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
            <p className="animationutilitytext">Note: This utility animates the CSS opacity property, meaning it will
              override any existing opacity on an element being animated!</p>
          </div>

        </div>
      </div>
    </div>
  );
}
//creating other utilities page
export function Other() {
  const progressbars = [{ name: "Normal Progress Bar", height: 16 }, { name: "Small Progress Bar", height: 8 }];
  // creating anchor element when popup is open
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
    <div className="container">
      <div className="utilities-title">Other Utilities</div>
      <div>Bootstrap's default utility classes can be found on the official
        <a href="#"> Bootstrap Documentation </a>page.
        The custom utilities below were created to extend this theme past the default utility classes built into
        Bootstrap's framework
      </div>

      <div className="inlineitems">
        <div className="inlineitem1">
          <div className="customcard">
            <div className="card-title">Overflow Hidden Utilty</div>
            <div className="utilities-card-content">
              Use <span className="redtext">.o-hidden</span> to set the overflow property of any element to hidden.
            </div>
          </div>
          <div className="customcard">
            <div className="card-title">Progress Small Utility</div>
            <div className="utilities-card-content">
              {/* creating progress bars */}
              {progressbars.map((progbar) =>
                <Progresssmallutility name={progbar.name} height={progbar.height} />)}
              <div>Use the <span className="redtext">.progress-sm</span> class along with
                <span className="redtext">.progress</span></div>
            </div>
          </div>
          <div className="customcard">
            <div className="card-title">Dropdown - No Arrow</div>
            <div className="utilities-card-content">
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                id="utilitydropdownnoarrow"
              >
                <div className="utilitynavdropdown">Dropdown (no arrow)</div>
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
                  {options.map((option) => (
                    <div style={{ display: option === "None" ? "none" : "block" }}>
                      <a className="dropdown-menu" href="#">
                        <StyledMenuItem key={option} onClick={handleClose}>
                          {option}
                        </StyledMenuItem>
                      </a>
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
              <p>
                Add the <span className="redtext">.no-arrow</span> class alongside the .dropdown
              </p>
            </div>
          </div>
        </div>
        <div className="inlineitem2">
          <div className="customcard">
            <div className="card-title">Rotation Utilities</div>
            <div className="utilities-card-content">
              <div className="rotate15">.rotate-15</div> {/* rotates the card by 15 degree */}
              <hr />
              <div className="rotate15 rn15">.rotate-n-15</div> {/* rotates the card by -15 degree */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
//creates progress bar
function Progresssmallutility({ name, height }) {
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: height,
      borderRadius: 6
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
      backgroundColor: "rgb(74, 74, 211)"
    }
  }))(LinearProgress);
  return (
    <p>
      <div>{name}</div>
      <BorderLinearProgress variant="determinate" value={75} />
    </p>
  )
}