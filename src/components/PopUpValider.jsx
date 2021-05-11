import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#DA7070",
    color: "black",
    fontFamily: "'Comfortaa', cursive",
    "&:hover": {
      background: "#FFB6A0",
      fontSize: "15px",
    },
  },
}));

function PopUpValider(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState();
  const history = useHistory();

  const handleClick = () => {
    history.push("/Delivery");
  };

  return (
    <div>
      <Button
        type="submit"
        onClick={() => setOpen(true)}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Valider
      </Button>
      <Dialog
        open={open}
        // onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation d'envoi"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Merci Percy et Genny, votre commande à bien été pris en compte, amusez vous bien.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary" autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopUpValider;
