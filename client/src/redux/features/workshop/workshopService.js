import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/workshops/";

const createWorkShop = async (token, workshopData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, workshopData, config);
  return response.data.data;
};

const getAllWorkShop = async (token) => {
  const response = await axios.get(API_URL);
  console.log("Service Workshops: ", response.data);
  return response.data.data;
};

const getSingleWorkShop = async (token, workshopData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, workshopData, config);
  return response.data.data;
};

const updateWorkShop = async (token, workshopData, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.patch(API_URL + `${id}`, workshopData, config);
  console.log(response);
  return response.data.data.updateWorkshopData;
};

const deleteWorkShop = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + `${id}`, config);
  console.log(response);
  return response.data.data.id;
};

const workshopService = {
  getAllWorkShop,
  getSingleWorkShop,
  createWorkShop,
  updateWorkShop,
  deleteWorkShop,
};

export default workshopService;
