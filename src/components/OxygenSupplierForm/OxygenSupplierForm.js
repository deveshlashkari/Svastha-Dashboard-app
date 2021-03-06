import React from "react";

import {
  Typography,
  Grid,
  Container,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { withRouter } from "next/router";
import Link from "next/link";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const styles = {
  paper: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#E24047",
    color: "white",
    marginBottom: "25px",
  },
  cssLabel: {
    color: "#A1A1A1",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#E24047 !important`,
    },
  },

  cssFocused: {
    borderColor: "#E24047 !important",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#E24047 !important",
  },
  input: {},
  datePickerRoot: {
    borderBottom: "aqua",
  },
  selectRoot: {
    borderColor: "aqua",
  },
  selected: {},

  root: { flexGrow: 1 },
};
class OxygenSupplierForm extends React.Component {
  redirectToHome = () => {
    this.props.router.push("/");
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        {/* <Navbar color="white" /> */}
        <div className={classes.root}>
          <AppBar position="sticky" style={{ backgroundColor: "white" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={this.redirectToHome}
              >
                <KeyboardBackspaceIcon
                  style={{
                    color: "#E24047",
                    height: "35px",
                    width: "35px",
                    marginTop: "5px",
                  }}
                />
              </IconButton>
              <div style={{ flexGrow: 1 }}>
                <img src="/logo.jpg" style={{ height: "50px" }} />
              </div>
              <Link href="/oxygensupplier/all">
                <a>
                  <span
                    style={{
                      fontWeight: "normal",
                      color: "#E24047",
                      textDecoration: "underline",
                    }}
                  >
                    View all Oxygen Suppliers
                  </span>
                </a>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="h3">
              Share Oxygen Supplier Information
            </Typography>
            <Typography
              style={{
                borderBottom: "2px solid #E24047",
                marginBottom: "15px",
              }}
            >
              You can share details of active oxygen suppliers for COVID-19
              patients through this form.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Alternate Phone"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Grid container direction="row">
                  <Grid item>
                    <Checkbox />
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        marginTop: "13px",
                      }}
                    >
                      I hereby agree to the Terms and Conditions of sharing this
                      data publicly on this website to the best of my knowledge
                      to help the people who need it.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.submitButton}
                >
                  <span style={{ fontSize: "18px", letterSpacing: "2px" }}>
                    Submit
                  </span>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(OxygenSupplierForm));
