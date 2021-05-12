import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 260,
    color: "#4E96AF",
  },

  burgerbut: {
    color: "black",
    backgroundColor: "#5FAEFF",
    height: "60px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "10px",
    border: "1px solid #7046FF",
    "&:hover": {
      background: "#4E96AF",
      backgroundColor: "black",
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
    textDecoration: "none",
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
      style={{ backgroundColor: "#60AAFF", height: "100%" }}
    >
      <List>
        <div className={classes.menuburgerlist}>
          <ul className={classes.puces}>
            <li>
              <Button
                className={classes.accueil}
                to="/"
                component={Link}
                style={{ backgroundColor: "#60AAFF" }}
              >
                <ListItemIcon>
                  <HomeIcon className={classes.plus} />
                </ListItemIcon>
                <Link to="/">
                  <strong>ACCUEIL</strong>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                className={classes.nous}
                to="/drinks"
                component={Link}
                style={{ textDecoration: "none", backgroundColor: "#60AAFF" }}
              >
                <ListItemIcon>
                  <LocalBarIcon className={classes.plus} />
                </ListItemIcon>
                <>
                  <strong>COCKTAILS</strong>{" "}
                </>
              </Button>
            </li>
            <li>
              <Button
                className={classes.ajout}
                to="/snacks"
                component={Link}
                style={{ textDecoration: "none", backgroundColor: "#60AAFF" }}
              >
                <ListItemIcon>
                  <LocalDrinkIcon className={classes.plus} />
                </ListItemIcon>
                <>
                  <strong>SNACKS</strong>{" "}
                </>
              </Button>
            </li>
            <li>
              <Button
                className={classes.ajout}
                to="/extras"
                component={Link}
                style={{ textDecoration: "none", backgroundColor: "#60AAFF" }}
              >
                <ListItemIcon>
                  <FavoriteIcon className={classes.plus} />
                </ListItemIcon>
                <>
                  <strong>EXTRAS</strong>{" "}
                </>
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
