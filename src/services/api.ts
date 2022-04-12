import axios from "../lib/axios";

const APIClient = async (endpoint: string) => {
  let data;

  try {
    const request = await axios(endpoint);
    data = request.data;
  } catch (error) {
    data = error;
  }

  return data;
};

export const APIEndpoints = {
  getAssets: async () => {
    const request = await APIClient("/assets");
    return request;
  },
  getUsers: async () => {
    const request = await APIClient("/users");
    return request;
  },
  getUnits: async () => {
    const request = await APIClient("/units");
    return request;
  },
  getCompanies: async () => {
    const request = await APIClient("/companies");
    return request;
  },
};

export default APIClient;
