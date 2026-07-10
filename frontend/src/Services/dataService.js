import api from "./api";

export const uploadBusinessData = async (formData) => {
  return api.post("/data/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getDashboardSummary = async () => {
  return api.get("/dashboard/summary");
};
