import React from 'react';
import MenuBurger from '../components/MenuBurger';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    burger: {
     display: "flex",
     justifyContent: "flex-end",
    },}
);

function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.burger}>
            <MenuBurger />
        </div>
    );
}

export default Header;