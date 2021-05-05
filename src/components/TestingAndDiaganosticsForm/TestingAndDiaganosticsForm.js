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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { saveEmergencyContact } from "../../../Services/API";

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

class TestingAndDiaganosticsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalName: "",
      phone: "",
      address: "",
      totalBeds: "",
      icuBedsCount: "",
      isolationBeds: "",
      oxygenBeds: "",
      hospitalType: "",
    };
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  saveMentalHealthDetails = () => {
    if (
      this.state.name === "" ||
      this.state.phone === "" ||
      this.state.address === ""
    ) {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let body = {
        emergency_contact: {
          address: this.state.address,
          emergency_category_id: "9",
          basic_info_attributes: {
            name: this.state.name,
            contact: this.state.phone,
            address: this.state.address,
            latitude: 123.45,
            longitude: 876.05,
          },
        },
      };

      saveEmergencyContact(body).then((data) => {
        if (data.data.status === "success") {
          toast.success("Testing & Diaganostics data added successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            this.props.router.push("/");
          }, 3000);
        } else {
          toast.error(data.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    }
  };

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
            </Toolbar>
          </AppBar>
        </div>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="h3">Mental Health Counselling</Typography>
            <Typography
              style={{
                borderBottom: "2px solid #E24047",
                marginBottom: "15px",
              }}
            >
              Share details of counsellers in your city
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
                  value={this.state.name}
                  onChange={this.handleName}
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
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
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
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.submitButton}
                  onClick={this.saveMentalHealthDetails}
                >
                  <span style={{ fontSize: "18px", letterSpacing: "2px" }}>
                    Submit
                  </span>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

export default withStyles(styles)(withRouter(TestingAndDiaganosticsForm));
