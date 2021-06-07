import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/Toolbar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "pink",
  },
  menuBar: {
    backgroundColor: "#ff04",
    color: "#444",
  },
  toolBar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
  imgWrap: {
    margin: "5px",
  },
});

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback(
    (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setOpen(!open);
    },
    [setOpen, open]
  );

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
