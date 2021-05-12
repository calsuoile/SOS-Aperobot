import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import ListItemIcon from "@material-ui/core/ListItemIcon";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textPrimary">{`${Math.round(
          props.value
        )}%`}</Typography>
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
    marginTop: "120px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  progressbar: {
    width: "70%",
    margin: "auto",
  },
  title: {
    with: "85%",
    marginBottom: "20px",
    textAlign: "center",
  },
});

export default function ProgressBar() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 2);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>
        6PO a préparé ta commande, elle est en cours de livraison, tu pourras
        bientôt arrêter de t'ennuyer
      </h3>
      <div className={classes.progressbar}>
        <ListItemIcon>
          <LocalBarRoundedIcon className={classes.plus} />
        </ListItemIcon>
        <LinearProgressWithLabel value={progress} />
      </div>
    </div>
  );
}
