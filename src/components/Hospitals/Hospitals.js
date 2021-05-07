import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Grid,
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { getListOfEmergencyCategory } from "../../../Services/API";
import { withRouter } from "next/router";
const styles = {
  table: {
    minWidth: 650,
  },
  root: { flexGrow: 1 },
  tableHeader: {
    background: "#E24047",
    color: "white",
  },
};

class Hospitals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mentalHealthList: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    getListOfEmergencyCategory("Mental Health Counseling").then((data) => {
      try {
        if (data.data.status === "success") {
          let tempArr = [];
          console.log(data);
          data.data.emergency_contacts[0].details.map((_data) => {
            tempArr.push({
              id: _data.id,
              name: _data.name,
              contact: _data.contact,
              addressLineOne: _data.address_line_1,
              addressLineTwo: _data.address_line_2,
            });
          });
          this.setState({
            mentalHealthList: tempArr,
            isLoading: false,
          });
        }
      } catch (error) {
        this.setState({ isLoading: false });
      }
    });
  };

  redirectToHome = () => {
    this.props.router.push("/");
  };
  render() {
    const { classes } = this.props;
    return this.state.isLoading ? (
      <Loader
        type="ThreeDots"
        color="#E24047"
        height={200}
        width={200}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    ) : (
      <>
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
        <Container maxWidth="xl" component="main" style={{ marginTop: "20px" }}>
          <Grid container style={{ marginBottom: "20px" }}>
            <Grid item xs={12} justify="center">
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#E24047" }}
              >
                Hospitals and Beds
              </Typography>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#E24047" }}>
                <TableRow>
                  <TableCell style={{ color: "white" }}>Name</TableCell>
                  <TableCell style={{ color: "white" }}>Contact</TableCell>
                  <TableCell style={{ color: "white" }}>Address One</TableCell>
                  <TableCell style={{ color: "white" }}>Address Two</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.mentalHealthList.map((data) => (
                  <TableRow>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.contact}</TableCell>
                    <TableCell>{data.addressLineOne}</TableCell>
                    <TableCell>{data.addressLineTwo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(withRouter(Hospitals));
