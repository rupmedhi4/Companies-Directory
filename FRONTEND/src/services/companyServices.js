import axios from "axios";
import { apiAgent } from "./apiAgent";

export const fetchCompanies = async () => {
  try {
    const res = await axios.get(apiAgent.getCompanies);
    return res.data.data;
  } catch (error) {
    throw error;
  }
};
