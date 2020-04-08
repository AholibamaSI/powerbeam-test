/*eslint-disable*/
import React from "react";
import { connect } from 'react-redux'
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import styles from "../../assets/sidebarStyle.js";

const useStyles = makeStyles(styles);

const Sidebar = ({ routes, logoText, handleDrawerToggle, open, color, Stop }) => {
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={classes.item}
            activeClassName={classes.active}
            key={key}
          >
            <ListItem button className={classes.itemLink}>
              <ListItemText
                primary={prop.name}
                className={classes.itemText}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <label
        className={classes.logoLink}
      >
        {logoText}
      </label>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          
        </Drawer>
      </Hidden>
    </div>
  );
}


export default Sidebar



