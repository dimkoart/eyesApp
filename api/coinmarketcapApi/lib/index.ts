import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const getCryptoList = async () => {
  const response = await client.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
    },
  });
  return response.data;
};

export const getCryptoById = async (id: string) => {
  const response = await client.get(`/coins/${id}`);
  return response.data;
};

export const getCryptoMarketChart = async (id: string) => {
  const response = await client.get(
    `/coins/${id}/market_chart?vs_currency=usd&days=7`
  );
  return response.data;
};
