import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  faAngleLeft, faAngleRight, faBell, faEnvelope,  faLaughWink, faSearch, faTachometerAlt,
  faCalendar, faClipboardList, faComments, faDollarSign, faDownload
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Chart from "react-apexcharts";
import CanvasJSReact from './canvasjs.react';
import { Components, Buttons, Cards} from "./Components";
import { Utilities, Navcolors, Borders, Animations, Other } from "./Utilities";
import { Pages, Login, Errorpage, Blankpage } from "./Pages";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var Component = React.Component;
function App() {
  //to expand the side navbar when the arrow button is clicked
  const [expand, setexpand] = useState(true);
  //to hide/show the side navbar when the menu button on the top is clicked
  const [navshow, setnavshow] = useState("block");
  return (
    //if path is login,it will go to a login page
    <Switch>
      <Route path="/Login">
        <Login />
      </Route>
      {/*if path is not login, it will create a side navbar and top menu bar*/}
      <Route path="/">
        <div className="wholepage">
          {/*when the arrow button is clicked it will toggle between expand and contract(the width changes)*/}
          <div className="nav-bar" style={{ width: expand ? "200px" : "100px", display: navshow }}>
            <Link className="link" to="/sb-admin-2">
              <div className="nav-sb-admin">
                <FontAwesomeIcon icon={faLaughWink} size="2x" />
                {/*this text is not visible when the side navbar is not expanded */}
                <span style={{ display: !expand ? "none" : "" }}>SB ADMIN <sup>2</sup></span>
              </div>
            </Link>
            <hr />

            <Link className="link" to="/Dashboard">
              {/*the icon and text alignment changes when the navbar toggles between expand and contract */}
              <div
                className="nav-dashboard"
                style={{ flexDirection: !expand ? "column" : "row" }}
              >
                <FontAwesomeIcon icon={faTachometerAlt} size="1x" />
                Dashboard
              </div>
            </Link>
            <hr />

            <div>
              <div
                className="interface"
                style={{ justifyContent: !expand ? "center" : "" }}
              >
                INTERFACE
              </div>
              <Components expand={expand} />

              <Utilities expand={expand} />
            </div>
            <hr />
            <div>
              <div
                className="addons"
                style={{ justifyContent: !expand ? "center" : "" }}
              >
                ADDONS
              </div>
              <Pages expand={expand} />
            </div>
            <hr />
            {/*side arrow buttons wont be visible when the navbar is not expanded */}
            {expand ? (
              <div className="nav-expand-button-div">
                <button
                  className="nav-expand-button"
                  onClick={() => setexpand(!expand)}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              </div>
            ) : (
              ""
            )}

            {!expand ? (
              <div className="nav-expand-button-div">
                <button
                  className="nav-expand-button"
                  onClick={() => setexpand(!expand)}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            ) : (
              ""
            )}
            <div className="procontainer">
              <img className="proimage" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" />
              <div>SB Admin Pro is packed with premium features, components, and more!</div>
              <button className="probutton">Upgrade to Pro!</button>
            </div>
          </div>
          {/*creating a menubar on top */}
          <div>
            <div className="topnavbar">
              {/*when menu button is clicked, the side navbar toggles between hide/show. 
              This menu button is not available for large screens and the sidenavbar is always visible */}
              <button className="navtogglebutton" onClick={() => { navshow === "block" ? setnavshow("none") : setnavshow("block") }}><MenuIcon /></button>
              
              <div className="searchbarNicon">
                <input type="text" placeholder="Search for..." className="topnavsearchbar"></input>
                <button className="topnavbaricon"><FontAwesomeIcon icon={faSearch} className="topnavicon" /></button>
              </div>
              <div className="topnavrightpart">
                <div className="topnavbellicon"><FontAwesomeIcon icon={faBell} /></div>
                <div className="topnavbellicon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="topnavusername">douglas McGee</div>
              </div>
            </div>
            
            <Switch>
              <Route path="/sb-admin-2">
                <Home />
              </Route>
              <Route path="/Dashboard">
                <Redirect to="/sb-admin-2" />
              </Route>
              <Route path="/Buttons">
                <Buttons />
              </Route>
              <Route path="/Cards">
                <Cards />
              </Route>
              <Route path="/Navcolors">
                <Navcolors />
              </Route>
              <Route path="/Borders">
                <Borders />
              </Route>
              <Route path="/Animations">
                <Animations />
              </Route>
              <Route path="/Other">
                <Other />
              </Route>
              <Route path="/404page">
                <Errorpage />
              </Route>
              <Route path="/Blankpage">
                <Blankpage />
              </Route>
              <Route exact path="/">
                <Redirect to="/sb-admin-2" />
              </Route>
            </Switch>
            {/*creating a copyright content at the bottom of screen */}
            <div className="coyrightcontainer">Copyright © Your Website 2021</div>
          </div>

        </div>
      </Route>
    </Switch>
  );
}
//this is the page first loaded
function Home() {
  //creating arrays for the contents of each card
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
  const charts = [
    { name: "Earnings Overview", chart: "chart1" },
    { name: "Revenue Sources", chart: "chart2" }
  ];
  const projects = [
    { name: "Server Migration", progress: "20%", colour: "#e60909" },
    { name: "Sales Tracking", progress: "40%", colour: "rgb(241, 182, 20)" },
    { name: "Customer Database", progress: "60%", colour: "#2758e9" },
    { name: "Payout Details", progress: "80%", colour: "#289baf" },
    { name: "Account Setup", progress: "Complete!", colour: "#17b379" }
  ];
  const colors = [
    { name: "Primary", code: "#4e73df" },
    { name: "Success", code: "#1cc88a" },
    { name: "Info", code: "#36b9cc" },
    { name: "Warning", code: "#f6c23e" },
    { name: "Danger", code: "#e74a3b" },
    { name: "Secondary", code: "#858796" },
    { name: "Light", code: "#f8f9fc" },
    { name: "Dark", code: "#5a5c69" }
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="header-dashboard">Dashboard</div>
        <div className="reportdiv">
          <a href="#" className="header-report">
            <span className="header-download-icon">
              <FontAwesomeIcon icon={faDownload} />
            </span>{" "}
            Generate Report
          </a>
        </div>
      </div>
      {/*creating cards */}
      <div className="top-cards-container">
        {headercards.map(({ cardname, cardvalue, cardicon }) => (
          <Topcards name={cardname} value={cardvalue} pic={cardicon} />
        ))}
      </div>
{/*creating charts */}
      <div className="charts-container">
        {charts.map(({ name, chart }) => (
          <Graphplots title={name} chart={chart} />
        ))}
      </div>
{/*the inlineitems class will display the contents inline */}
      <div className="inlineitems">
        <div className="inlineitem1">
          <div className="projects-container">
            <div className="card-title">Projects</div>
            {/*creating progress bars */}
            <div className="projects-content">
              {projects.map(({ name, progress, colour }) => (
                <Projects name={name} progress={progress} colour={colour} />
              ))}
            </div>
          </div>
{/* creating color boxes */}
          <div className="colors-container">
            {colors.map(({ name, code }) => (
              <Colors name={name} code={code} />
            ))}
          </div>
        </div>

        <div className="inlineitem2">
          <Illustrations />
          <Development />
        </div>
      </div>
    </div>
  );
}
//creates the 4 cards on the top
export function Topcards({ name, value, pic }) {
  //styling the progress bar for
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 8
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
      backgroundColor: "#289baf"
    }
  }))(LinearProgress);
  return (
    <div className="top-card-container">
      <div className="top-card-details">
        <div className="top-card-name">{name}</div>
        <div className="top-card-value">{value}</div>
      </div>
      {/*displaying progress bar for 3rd card only */}
      <div
        className="topcard-progress-color"
        style={{ display: pic !== "3" ? "none" : "block" }}
      >
        <BorderLinearProgress variant="determinate" value={50} />
      </div>
      <div className="top-card-icon">
        {/*displaying different symbol for each card */}
        <FontAwesomeIcon
          icon={
            pic === "1"
              ? faCalendar
              : pic === "2"
                ? faDollarSign
                : pic === "3"
                  ? faClipboardList
                  : faComments
          }
          size={"2x"}
        />
      </div>
    </div>
  );
}
// drawing charts
function Graphplots({ title, chart }) {
  //the options in the popup when the button is clicked
  const options = ["None", "Action", "Another action", "Something else here"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
//sets an anchor element when the popup is open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //disables the anchor element when popup is closed
  const handleClose = () => {
    setAnchorEl(null);
  };
  //styling the popup contents
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
    <div className="chart-container">
      <div className="chart-header">
        <div className="card-title">{title}</div>
        <div>
        {/*popup opens and anchor element is set when the button is clicked */}
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
              {/*none option is chosen as default but it is not displayed */}
              {options.map((option) => (
                <div style={{ display: option === "None" ? "none" : "block" }}>
                  <a className="dropdown-menu" href="#">
                    <StyledMenuItem key={option} onClick={handleClose}>
                      {option}
                    </StyledMenuItem>
                  </a>
                  {/* horizontal line is inserted after the "another action" option */}
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
      {/* charts are created */}
      <div className="chart-content">
        {chart === "chart1" ? <MyChart1 /> : <MyChart2 />}
      </div>
    </div>
  );
}
//creating progress bars
function Projects({ name, progress, colour }) {
  //styling progress bars
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 18,
      borderRadius: 8
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
      backgroundColor: colour
    }
  }))(LinearProgress);
  //removing "%" from progress
  const progressvalue = progress.slice(0, 2);
  return (
    <div className="project-container">
      <div className="project-details">
        <div className="project-name">{name}</div>
        <div className="project-progress-value">{progress}</div>
      </div>

      <div className="project-progress-color">
        <BorderLinearProgress variant="determinate" value={progressvalue} />
      </div>
    </div>
  );
}
//creating color boxes
function Colors({ name, code }) {
  return (
    <div className="color-container">
      <div className="color-name">{name}</div>
      <div className="color-code">{code}</div>
    </div>
  );
}
function Illustrations() {
  return (
    <div className="illustrations-container">
      <div className="card-title">Illustrations</div>
      <div className="illustrations-content">
        <div className="illustrations-image">
          <img
            src="http://athena.ecs.csus.edu/~garciajm/img/undraw_posting_photo.svg"
            alt="..."
          ></img>
        </div>
        <p>
          Add some quality, svg illustrations to your project courtesy of{" "}
          <a href="https://undraw.co/">unDraw</a>, a constantly updated
          collection of beautiful svg images that you can use completely free
          and without attribution!
        </p>
        <a href="https://undraw.co/">Browse Illustrations on unDraw →</a>
      </div>
    </div>
  );
}
function Development() {
  return (
    <div className="development-container">
      <div className="card-title">Development Approach</div>
      <div className="development-content">
        <p>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
          to reduce CSS bloat and poor page performance. Custom CSS classes are
          used to create custom components and custom utility classes.
        </p>
        <p>
          Before working with this theme, you should become familiar with the
          Bootstrap framework, especially the utility classes.
        </p>
      </div>
    </div>
  );
}
//spline area chart
class MyChart1 extends Component {
  render() {
    const options = {
      animationEnabled: true,    //animation while the page is opened
      //axis labelling
      axisX: {
        minimum: new Date(2020, 11, 28),
        maximum: new Date(2021, 11, 5),
        valueFormatString: "MMM",
        lineColor: "rgba(255,255,255)",
        tickColor: "rgba(255,255,255)"
      },
      axisY: {
        minimum: -2000,
        maximum: 40500,
        prefix: "$",
        gridDashType: "dot",
        gridColor: "#E2DEEA",
        lineColor: "rgba(255,255,255)",
        tickColor: "rgba(255,255,255)"
      },
      //data labelling and styling the chart
      data: [{
        type: "splineArea",
        toolTipContent: ` <div class = "label1">{x}</div><div class = "label2">{y}</div>`,
        markerColor: "#1A20D5",
        color: "rgba(0,4,150,0.05)",
        lineColor: "#3036F3",
        lineThickness: "3",
        xValueFormatString: "MMM",
        yValueFormatString: "earnings: $#,##0.## ",
        showInLegend: false,
        dataPoints: [
          { x: new Date(2021, 0), y: 0 },
          { x: new Date(2021, 1), y: 10000 },
          { x: new Date(2021, 2), y: 5000 },
          { x: new Date(2021, 3), y: 15000 },
          { x: new Date(2021, 4), y: 10000 },
          { x: new Date(2021, 5), y: 20000 },
          { x: new Date(2021, 6), y: 15000 },
          { x: new Date(2021, 7), y: 25000 },
          { x: new Date(2021, 8), y: 20000 },
          { x: new Date(2021, 9), y: 30000 },
          { x: new Date(2021, 10), y: 25000 },
          { x: new Date(2021, 11), y: 40000 }
        ]
      }]
    }
    return (
      <div className="chart1">
        <CanvasJSChart options={options}  //creates chart

        />

      </div>
    );
  }

}
//creates doughnut chart
class MyChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [55, 30, 15],
      options: {
        labels: ['Direct', 'Social', 'Referral'],
        dataLabels: { enabled: false },
        legend: {
          position: 'bottom'
        },
        colors: ['#2758e9', '#26BE6F', '#3FA7DE'],
        chart: {
          type: 'donut'
        },
        plotOptions: {
          pie: {
            size: 200,  //outer radius
            donut: {
              size: "80%"  //inner radius
            }
          }
        },
        tooltip: {
          fillSeriesColor: false,
          theme: "light",
          marker: { show: false },
        }
      }
    };
  }
  render() {
    return (
      <div className="chart2">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="420" />
      </div>
    );
  }
}




export default App