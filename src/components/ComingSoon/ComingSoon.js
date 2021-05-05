import React from "react";

import { Grid, Container, Typography, Button } from "@material-ui/core";
import { useRouter } from "next/router";

export default function ComingSoon() {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <img src="/loading.svg" />
          <Typography
            variant="h2"
            style={{ textAlign: "center", color: "#E24047" }}
          >
            Coming soon
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            onClick={() => router.push("/")}
            style={{ border: "1px solid #E24047" }}
          >
            Go To Home
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
