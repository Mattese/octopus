import { Currency } from "../types/commonTypes";
import { api, localApi } from "./instances";

export interface CurrencyList {
  currencies: Currency[];
}

type Rates = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export const getCurrencyList = async () => {
  try {
    const { data } = await api.get<CurrencyList>(
      "/8937bc31-0d29-4e30-b741-c3d22886e4bf"
    );
    return data;
  } catch (e) {
    throw new Error("different error than axios");
  }
};

export const getRates = async () => {
  try {
    const { data } = await localApi.get("/data/aud.json");
    return data;
  } catch (e) {
    throw new Error("different error than axios");
  }
};
