import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRates } from "../axios/routes";
import { Rate } from "../types/commonTypes";
import ErrorIcon from "@mui/icons-material/Error";

export const CurrencyDetail: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rates, setRates] = useState<Rate>([]);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const loadData = async () => {
    if (params.id) {
      setIsLoading(true);
      try {
        const rates = await getRates(params.id);
        setRates(rates);
        isError && setIsError(false);
      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Box sx={{ width: "fit-content", margin: "0 auto" }}>
          <CircularProgress sx={{ margin: "0 auto" }} color="secondary" />
        </Box>
      ) : (
        <Card
          raised
          sx={{
            paddingY: 3,
            margin: "0 auto",
            maxWidth: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {rates.length > 0 &&
            rates.map((rate, index) => (
              <Typography key={index}>{rate}</Typography>
            ))}
          {isError && (
            <Alert color="error" icon={<ErrorIcon />}>
              Data not available
            </Alert>
          )}
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Go back to dashboard
          </Button>
        </Card>
      )}
    </>
  );
};
