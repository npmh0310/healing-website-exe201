import axios from "./axios";

const getWorkshop = () => {
    return axios.get("workshops");
}

export {
    getWorkshop
}