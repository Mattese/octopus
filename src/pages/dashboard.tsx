import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrencyList, getCurrencyList, getRates } from "../axios/routes";

export const Dashboard = () => {
  const [currencies, setCurrencies] = useState<CurrencyList["currencies"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loadData = async () => {
    setIsLoading(true);
    const { currencies } = await getCurrencyList();

    setCurrencies(currencies);
    setIsLoading(false);
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
      {isLoading ? (
        <Box sx={{ width: "fit-content", margin: "0 auto" }}>
          <CircularProgress sx={{ margin: "0 auto" }} color="secondary" />
        </Box>
      ) : currencies.length > 0 ? (
        currencies.map((currency, index) => (
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
                navigate(`/currency/${currency.code}`);
              }}
            >
              Go to detail
            </Button>
          </Box>
        ))
      ) : (
        <Box sx={{ width: "fit-content", margin: "0 auto" }}>
          <Typography>No data</Typography>{" "}
        </Box>
      )}
    </Box>
  );
};
