import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

export default class NoDataFound extends Component {
  render() {
    return (
      <>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{
            minWidth: "100%",
            minHeight: "50vh",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              borderBottom: "3px solid #EDEDED",
              color: "#E24047",

              padding: "20px",
            }}
            variant="h3"
          >
            No Data Found
          </Typography>
        </Grid>
      </>
    );
  }
}
