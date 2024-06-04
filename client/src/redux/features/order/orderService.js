import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/order/";

const createOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData);
  return response.data.data;
};

const orderService = {
    createOrder,
};

export default orderService;
