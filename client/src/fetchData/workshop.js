import axios from "./axios";

const getWorkshop = () => {
  return axios.get("workshops");
};

const getWorkshopById = (id) => {
  return axios.get(`workshops/${id}`);
};

export { getWorkshop, getWorkshopById };
