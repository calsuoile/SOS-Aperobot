import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LocalBarRoundedIcon from "@material-ui/icons/LocalBarRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Dialog, DialogContent, DialogContentText } from "@material-ui/core";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color="textPrimary"
          style={{ color: "#60AAFF" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    marginTop: "80px",
    marginLeft: "20px",
    marginRight: "20px",
    paddingTop: "120px",
  },
  progressbar: {
    width: "70%",
    margin: "auto",
  },
  title: {
    with: "85%",
    marginBottom: "20px",
    textAlign: "center",
    color: "#60AAFF",
    fontFamily: "Comfortaa",
  },
  plus: {
    color: "#60AAFF",
    margin: "auto",
  },
});

export default function ProgressBar() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 4);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  useEffect(() => {
    setTimeout(() => {
      handleClickOpen();
    }, 26000);
  }, []);

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>
        La commande est en cours de préparation et de livraison, tu pourras
        bientôt arrêter de t'ennuyer.
      </h3>
      <div className={classes.progressbar}>
        <LinearProgressWithLabel value={progress} />
        <ListItemIcon>
          <LocalBarRoundedIcon className={classes.plus} />
        </ListItemIcon>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <DialogContent style={{ backgroundColor: "white" }}>
          <DialogContentText
            id="alert-dialog-description"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p style={{ color: "#60AAFF" }}>
              {" "}
              Ginny est arrivé avec ta commande, enjoy !
            </p>
            <img
              src="assets/bender.gif"
              alt="bender"
              style={{ width: "200px" }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
