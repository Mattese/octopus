import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { CurrencyList, getCurrencyList, getRates } from "./axios/routes";

function App() {
  const [currencies, setCurrencies] = useState<CurrencyList["currencies"]>([]);
  const file = "aud";

  const loadData = async () => {
    const { currencies } = await getCurrencyList();
    // TODO: finish
    const aud = await getRates();
    console.log(aud, "aud");
    setCurrencies(currencies);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box>
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        variant="h3"
      >
        List of currencies
      </Typography>
      {currencies.map((currency, index) => (
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "50%",
            margin: "0 auto",
          }}
          key={index}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ paddingRight: 1 }} component="div">
              {currency.country}
            </Typography>
            <Typography component="div">{currency.code}</Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("implement routing");
            }}
          >
            Go to detail
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default App;
