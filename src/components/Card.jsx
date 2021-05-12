import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 3px 15px #b3b3b3",
    margin: "30px 20px",
    fontFamily: "Comfortaa, cursive",
    top: 268,
    backgroundColor: "#60AAFF",
    color: "#7046FF",
  },

  drinkPicture: {
    width: "250px",
    height: "300px",
  },

  drinkName: {
    margin: "auto 10 auto 0 ",
  },

  isVirgin: {
    alignSelf: "start",
    fontStyle: "italic",
    margin: "5px",
  },

  price: {
    margin: "5px",
    alignSelf: "flex-center",
  },
}));

function Card({ name, avatar, isVirgin, price }) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={classes.cardContainer}>
      <h3>{name}</h3>
      <img src={avatar} alt={name} className={classes.drinkPicture} />
      <p className={classes.price}>{price}</p>
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
        style={{ alignSelf: "center", margin: "10px", color: "#48FF95" }}
      />
    </div>
  );
}

export default Card;
