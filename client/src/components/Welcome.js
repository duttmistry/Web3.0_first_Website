import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
function Welcome() {
    const {
      connectWallet,
      currentAccount,
      formData,
      handleChange,
      sendTransaction,
    } = useContext(TransactionContext);
 
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };



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
            {!currentAccount && (
              <Grid item xs={4} sm={8} md={12}>
                <Button variant="contained" onClick={connectWallet}>
                  Connect Wallet
                </Button>
              </Grid>
            )}
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
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <button onClick={handleSubmit}>
              Send Now
            </button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Welcome;
