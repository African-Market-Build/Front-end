import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://africas-market-place.herokuapp.com/api",
  });
};

export default AxiosWithAuth;
