import {
  hexToRgb
} from "./material-react.js";

const sidebarStyle = theme => ({
  logo: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color:"gray",
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "gray"
    }
  },
  logoLink: {
    textTransform: "uppercase",
    padding: "5px 0",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: "gray"
    }
  },
  item: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    position: "relative",
    display: "block",
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: "#fff",
    }
  },
  active: {
    background:"rgba(" +
        hexToRgb("#999") +
        ", 0.42)"
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "15px 20px",
    backgroundColor: "transparent",
  },
  itemText: {
    margin: "0",
    lineHeight: "30px",
    fontSize: "16px",
    color: "gray",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  itemTextRTL: {
    textAlign: "right"
  },
  whiteFont: {
    color: "#fff"
  },
  blue: {
    backgroundColor: "blue",
    "&:hover,&:focus": {
      backgroundColor: "blue"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch"
  },
  activePro: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "100%",
      bottom: "13px"
    }
  }
});

export default sidebarStyle;
