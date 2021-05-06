import React, { useState } from "react";

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

import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import { savePlasmaDonor } from "../../../Services/API";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}));

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#E24047",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: "#E24047",
      },
      daySelected: {
        backgroundColor: "#E24047",
      },
      dayDisabled: {
        color: "#E24047",
      },
      current: {
        color: "#E24047",
      },
    },

    MuiButton: {
      textPrimary: {
        color: "#E24047",
      },
    },
  },
});

const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      borderColor: "#E24047",
    },
    "&:hover $notchedOutline": {
      borderColor: "#E24047",
    },
    "&$focused $notchedOutline": {
      borderColor: "#E24047",
    },
  },
  focused: {},
  notchedOutline: {},
}));

export default function PlasmaDonorForm() {
  const classes = useStyles();
  const router = useRouter();
  const outlinedInputClasses = useOutlinedInputStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [covidStatus, setCovidStatus] = useState("");
  const [dischargeReport, setDischargeReport] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const redirectToHome = () => {
    router.push("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleAadharChange = (event) => {
    setAadhar(event.target.value);
  };
  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };
  const handleCovidStatusChange = (event) => {
    setCovidStatus(event.target.value);
  };
  const handleDischargeReportChange = (event) => {
    setDischargeReport(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleRedirect = () => {
    console.log("called");
  };

  const savePlasmaDonorDetails = () => {
    let networkError = false;
    let body = {
      plasma_donor: {
        name: name,
        email: email,
        age: age,
        city_name: city,
        blood_group: bloodGroup,
        adhar_card: aadhar,
        have_discharge_report: dischargeReport,
        ever_get_covid: covidStatus,
        status: "pending",
        basic_info_attributes: {
          name: name,
          contact: phone,
          latitude: "22.9721176",
          longitude: "76.054485",
          address: address,
        },
      },
    };
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      age === "" ||
      aadhar === "" ||
      bloodGroup === "" ||
      covidStatus === "" ||
      dischargeReport === "" ||
      address === "" ||
      city === ""
    ) {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      networkError = true;
    }
    if (phone.length !== 10) {
      toast.error("Phone number length should be 10", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      networkError = true;
    }

    if (!networkError) {
      savePlasmaDonor(body).then((data) => {
        if (data.data.status === "success") {
          toast.success(data.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            router.push("/");
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

  return (
    <>
      <div className={classes.root}>
        <AppBar position="sticky" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={redirectToHome}
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
            <Link href="/plasmadonor/all">
              <a>
                <span
                  style={{
                    fontWeight: "normal",
                    color: "#E24047",
                    textDecoration: "underline",
                  }}
                >
                  View all Donors
                </span>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h2">
            Add yourself as COVID-19 Plasma Donor
          </Typography>
          <Typography
            style={{ borderBottom: "2px solid #E24047", marginBottom: "15px" }}
          >
            Fill this form to add yourself as a plasma donor for COVID-19
            patients
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
                onChange={handleNameChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
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
                onChange={handleEmailChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
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
                value={phone}
                onChange={handlePhoneChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-basic"
                label="Age"
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
                value={age}
                onChange={handleAgeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Aadhar Card Number"
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
                value={aadhar}
                onChange={handleAadharChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Blood Group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  ref={inputLabel}
                  htmlFor="outlined-age-simple"
                  label="Blood Group"
                  value="select"
                  input={
                    <OutlinedInput
                      labelWidth={labelWidth}
                      name="age"
                      id="outlined-age-simple"
                      classes={outlinedInputClasses}
                    />
                  }
                  value={bloodGroup}
                  onChange={handleBloodGroupChange}
                >
                  <MenuItem value="select">
                    <em>Please select</em>
                  </MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">A-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Ever Got COVID ?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="got covid"
                  ref={inputLabel}
                  value="select"
                  input={
                    <OutlinedInput
                      labelWidth={labelWidth}
                      name="age"
                      id="outlined-age-simple"
                      classes={outlinedInputClasses}
                    />
                  }
                  value={covidStatus}
                  onChange={handleCovidStatusChange}
                >
                  <MenuItem value="select">
                    <em>Please select</em>
                  </MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Do You have Discharge Report
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="discharge"
                  value="select"
                  labelWidth={inputLabel}
                  input={
                    <OutlinedInput
                      labelWidth={labelWidth}
                      name="age"
                      id="outlined-age-simple"
                      classes={outlinedInputClasses}
                    />
                  }
                  value={dischargeReport}
                  onChange={handleDischargeReportChange}
                >
                  <MenuItem value="select">
                    <em>Please select</em>
                  </MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              >
                When did you get cured from COVID-19 ?
              </Typography>
              <ul style={{ marginTop: "5px" }}>
                <li style={{ fontWeight: "bold" }}>
                  If you got cured more than 14 days ago, then people can
                  contact you right now
                </li>
                <li style={{ fontWeight: "bold" }}>
                  If you got cured more than 14 days ago, then people can
                  contact you right now
                </li>
              </ul>
              <Typography style={{ fontWeight: "bold" }}>
                In both cases, please fill the form
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ThemeProvider theme={materialTheme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    style={{ width: "100%" }}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Select Date"
                    format="MM/dd/yyyy"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    InputProps={{ className: classes.input }}
                    classes={{ root: classes.datePickerRoot }}
                  />
                </MuiPickersUtilsProvider>
              </ThemeProvider>
            </Grid> */}
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
                value={address}
                onChange={handleAddressChange}
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
                value={city}
                onChange={handleCityChange}
              />
            </Grid>

            {/* <Grid item xs={12}>
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
                    data publicly on this website to the best of my knowledge to
                    help the people who need it.
                  </Typography>
                </Grid>
              </Grid>
            </Grid> */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                className={classes.submitButton}
                onClick={savePlasmaDonorDetails}
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
