import axios from "./axios";

const getWorkshop = () => {
  return axios.get("workshops");
};

const getWorkshopById = (id) => {
  return axios.get(`workshops/${id}`);
};

const payment = () => {
  const amount = 10000
  return axios.post(`payment/create-payment-link`, { amount: amount });
}

export { getWorkshop, getWorkshopById, payment };
