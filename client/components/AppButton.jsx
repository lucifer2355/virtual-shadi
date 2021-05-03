import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonStyle: { width: "100%", fontSize: "1rem", marginTop: "1rem" },
});

const AppButton = ({ title, color = "primary", onClick, ...other }) => {
  const classes = useStyles();

  return (
    <div className='w-12/12'>
      <Button
        variant='contained'
        color={color}
        className={classes.buttonStyle}
        onClick={onClick}
        {...other}
      >
        {title}
      </Button>
    </div>
  );
};

export default AppButton;
