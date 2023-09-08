import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function Welcome() {
    const { connectWallet } = useContext(TransactionContext);
  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      addressTo: "",
      amount: "",
      keyword: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });


  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={4} sm={4} md={3}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={12}>
              <Typography variant="h6">Send Crypto Across The World</Typography>
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <Button variant="contained" onClick={connectWallet}>
                Connect Wallet
              </Button>
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ padding: "10px", border: "1px solid black" }}
                  >
                    Reliability
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ padding: "10px", border: "1px solid black" }}
                  >
                    Security
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ padding: "10px", border: "1px solid black" }}
                  >
                    Ethereum
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ padding: "10px", border: "1px solid black" }}
                  >
                    Web 3.0
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ padding: "10px", border: "1px solid black" }}
                  >
                    Low fees
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ padding: "10px", border: "1px solid black" }}
                  >
                    Blockchain
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4} md={3}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="addressTo"
              value={values?.addressTo}
              onChange={handleChange}
              onBlur={handleBlur}
              id="outlined-basic"
              label="Address To"
              variant="outlined"
            />
            <TextField
              name="amount"
              value={values?.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              id="outlined-basic"
              label="Amount (ETH)"
              variant="outlined"
            />
            <TextField
              name="keyword"
              value={values?.keyword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="outlined-basic"
              label="Keyword"
              variant="outlined"
            />
            <TextField
              name="message"
              value={values?.message}
              onChange={handleChange}
              onBlur={handleBlur}
              id="outlined-basic"
              label="Message"
              variant="outlined"
            />
            <Button variant="contained" onClick={handleSubmit}>
              Send Now
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Welcome;
