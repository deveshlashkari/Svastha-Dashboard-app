import React, { useState } from "react";

import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
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
}));

export default function TwitterSearch() {
  const classes = useStyles();

  const [city, setCity] = useState("");
  const [bedsChecked, setBedsChecked] = useState(false);
  const [icuChecked, setIcuChecked] = useState(false);
  const [oxygenChecked, setOxygenChecked] = useState(false);
  const [ventilatorChecked, setVentilatorChecked] = useState(false);
  const [fabifluChecked, setFabifluChecked] = useState(false);
  const [remdesivirChecked, setRemdesivirChecked] = useState(false);
  const [checkAllChecked, setCheckAllChecked] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    console.log(event.target.value);
  };

  const redirectToTwitterSearch = () => {
    let searchUrl = `https://twitter.com/search?q=verified+${city}+(`;
    if (bedsChecked) {
      searchUrl = searchUrl + "bed+OR+beds+OR+";
    }
    if (icuChecked) {
      searchUrl = searchUrl + "icu+OR+";
    }
    if (oxygenChecked) {
      searchUrl = searchUrl + "oxygen+OR+";
    }
    if (ventilatorChecked) {
      searchUrl = searchUrl + "ventilator+OR+";
    }
    if (fabifluChecked) {
      searchUrl = searchUrl + "fabiflu+OR+";
    }
    if (remdesivirChecked) {
      searchUrl = searchUrl + "remdesivir";
    }

    searchUrl =
      searchUrl +
      ")+-%22not+verified%22+-%22unverified%22+-%22needed%22+-%22required%22&f=live";
    window.open(searchUrl, "_blank");
  };

  const handleUrlCheckbox = (event) => {
    let { name, checked } = event.target;
    if (name === "beds") {
      if (checked) {
        setBedsChecked(true);
      } else {
        setBedsChecked(false);
        setCheckAllChecked(false);
      }
    } else if (name === "icu") {
      if (checked) {
        setIcuChecked(true);
      } else {
        setIcuChecked(false);
        setCheckAllChecked(false);
      }
    } else if (name === "oxygen") {
      if (checked) {
        setOxygenChecked(true);
      } else {
        setOxygenChecked(false);
      }
    } else if (name === "ventilator") {
      if (checked) {
        setVentilatorChecked(true);
      } else {
        setVentilatorChecked(false);
        setCheckAllChecked(false);
      }
    } else if (name === "fabiflu") {
      if (checked) {
        setFabifluChecked(true);
      } else {
        setFabifluChecked(false);
        setCheckAllChecked(false);
      }
    } else if (name === "remdesivir") {
      if (checked) {
        setRemdesivirChecked(true);
      } else {
        setRemdesivirChecked(false);
        setCheckAllChecked(false);
      }
    } else if (name === "checkAll") {
      if (checked) {
        setCheckAllChecked(true);
        setBedsChecked(true);
        setIcuChecked(true);
        setOxygenChecked(true);
        setVentilatorChecked(true);
        setFabifluChecked(true);
        setRemdesivirChecked(true);
      } else {
        setCheckAllChecked(false);
        setBedsChecked(false);
        setIcuChecked(false);
        setOxygenChecked(false);
        setVentilatorChecked(false);
        setFabifluChecked(false);
        setRemdesivirChecked(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xl" style={{ textAlign: "center" }}>
        <Grid container spacing={3} style={{ marginTop: "10%" }}>
          <Grid item xs={12}>
            <Typography variant="h3">Search on Twitter</Typography>
            <span style={{ color: "#A1A1A1", fontSize: "15px" }}>
              Find latest resources on twitter real time!!!!
            </span>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
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
              placeholder="Enter city/region"
              onChange={handleCityChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup row style={{ justifyContent: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="beds"
                    checked={bedsChecked}
                    onChange={handleUrlCheckbox}
                  />
                }
                label="Beds"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="icu"
                    checked={icuChecked}
                    onChange={handleUrlCheckbox}
                  />
                }
                label="ICU"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="oxygen"
                    checked={oxygenChecked}
                    onChange={handleUrlCheckbox}
                  />
                }
                label="Oxygen"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="ventilator"
                    checked={ventilatorChecked}
                    onChange={handleUrlCheckbox}
                  />
                }
                label="Ventilators"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="fabiflu"
                    checked={fabifluChecked}
                    onChange={handleUrlCheckbox}
                  />
                }
                label="Fabiflu"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="remdesivir"
                    checked={remdesivirChecked}
                    onChange={handleUrlCheckbox}
                  />
                }
                label="Remdesivir"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkAll"
                    checked={checkAllChecked}
                    onChange={handleUrlCheckbox}
                  />
                }
                label="Check All"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ background: "#1DA1F2", color: "white" }}
              onClick={redirectToTwitterSearch}
            >
              <Typography
                variant="body2"
                style={{ fontSize: "18px", textTransform: "capitalize" }}
              >
                Search on Twitter
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer selectedIndex="1" />
    </>
  );
}
