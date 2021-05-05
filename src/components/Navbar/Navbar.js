import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useDarkMode from "use-dark-mode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode();
  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        style={
          props.color && props.color !== ""
            ? { background: props.color }
            : { background: "#E24047" }
        }
      >
        {props.color && props.color !== "" ? (
          <Toolbar>
            <Link href="/">
              <a>
                <img src="/logo.jpg" style={{ height: "50px" }} />
              </a>
            </Link>
          </Toolbar>
        ) : (
          <Toolbar>
            <Link href="/">
              <a>
                <Typography variant="h5" className={classes.title}>
                  Svastha
                </Typography>
              </a>
            </Link>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}
