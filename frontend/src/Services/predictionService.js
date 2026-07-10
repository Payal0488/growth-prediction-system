import api from "./api";

export const getPrediction = async (payload) => {
  return api.post("/prediction", payload);
};

export const getRiskSummary = async () => {
  return api.get("/risk/summary");
};
