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
import BootstrapTable from "react-bootstrap-table-next";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { getPlasmaDonors } from "../../../Services/API";
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

class PlasmaDonors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      donorsList: [],
    };
  }

  componentDidMount = () => {
    getPlasmaDonors().then((data) => console.log(data));
  };

  redirectToHome = () => {
    this.props.router.push("/");
  };
  render() {
    const { classes } = this.props;
    return (
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
                Plasma Donors
              </Typography>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#E24047" }}>
                <TableRow>
                  <TableCell style={{ color: "white" }}>Name</TableCell>
                  <TableCell style={{ color: "white" }}>Email</TableCell>
                  <TableCell style={{ color: "white" }}>Contact</TableCell>
                  <TableCell style={{ color: "white" }}>Address</TableCell>
                  <TableCell style={{ color: "white" }}>Age</TableCell>
                  <TableCell style={{ color: "white" }}>Gender</TableCell>
                  <TableCell style={{ color: "white" }}>Blood Group</TableCell>
                  <TableCell style={{ color: "white" }}>
                    Aadhar Card Number
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Date of Recovery
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Arjun Mehta</TableCell>
                  <TableCell>arjunmehta@gmail.com</TableCell>
                  <TableCell>+917828282828</TableCell>
                  <TableCell>Navlakha, Indore</TableCell>
                  <TableCell>23</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>B+</TableCell>
                  <TableCell>1319192932</TableCell>
                  <TableCell>12th May 2021</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lakhan Kumawat</TableCell>
                  <TableCell>lakhan12@gmail.com</TableCell>
                  <TableCell>+9182832423</TableCell>
                  <TableCell>Gulabbagh, Indore</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>AB+</TableCell>
                  <TableCell>131919232932</TableCell>
                  <TableCell>12th August 2021</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(withRouter(PlasmaDonors));
