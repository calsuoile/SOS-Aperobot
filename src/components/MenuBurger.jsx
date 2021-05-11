import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import LocalBarIcon from '@material-ui/icons/LocalBar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 260,
    color: "#4E96AF",
  },

  burgerbut: {
    color: "white",
    backgroundColor: "#5FAEFF",
    height: "60px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "10px",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  puces: {
    listStyle: "none",
  },
  accueil: {
    border: "none",
    color: "#6C5AFF",
    padding: "20px",
    backgroundColor: "white",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  nous: {
    border: "none",
    color: "#6C5AFF",
    padding: "20px",
    backgroundColor: "white",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },

  ajout: {
    border: "none",
    color: "#6C5AFF",
    padding: "20px",
    backgroundColor: "white",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },

  menuicon: {
    color: "#48FF95",
    fontSize: "35px",
    marginLeft: "10px",
  },

  plus: {
    color: "#85F62C",
    fontSize: "30px",
  },
  
});

export default function MenuBurger() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classes.menuburgerlist}>
          <ul className={classes.puces}>
            <li>
              <Button className={classes.accueil}>
                <ListItemIcon>
                  <HomeIcon className={classes.plus} />
                </ListItemIcon>
                <strong>ACCUEIL</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.nous} >
                <ListItemIcon>
                  <LocalBarIcon className={classes.plus} />
                </ListItemIcon>
                <strong>COCKTAILS</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.ajout}>
                <ListItemIcon>
                  <FastfoodIcon className={classes.plus} />
                </ListItemIcon>
                <strong>FORMULES</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.ajout}>
                <ListItemIcon>
                  <LocalDrinkIcon className={classes.plus} />
                </ListItemIcon>
                <strong>SNACKS</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.ajout}>
                <ListItemIcon>
                  <FavoriteIcon className={classes.plus} />
                </ListItemIcon>
                <strong>EXTRAS</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.ajout}>
                <ListItemIcon>
                  <ArrowUpwardIcon className={classes.plus} />
                </ListItemIcon>
                <strong>CHECKOUT</strong>
              </Button>
            </li>
          </ul>
        </div>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.burgerbut}
          >
            <ListItemIcon>
              <MenuIcon className={classes.menuicon} />
            </ListItemIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
