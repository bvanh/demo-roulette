import axios from "axios";
import api from "./api";
const baseApi = axios.create({
  baseURL: api.ROOT,
});

const getListLogin = (thisObj, time) => {
  return baseApi
    .get(api.LIST_LOGIN, {
      params: {
        times: time,
      },
    })
    .then((res) => {
      const { data } = res.data;
      const newData = data.map((val, index) => ({
        ...val,
        position: -1350 + (index + 1) * -50,
      }));
      const random = Math.floor(Math.random() * (70 - 3) + 3);
      console.log(newData[random], newData);
      thisObj.positionStop = newData[random];
      thisObj.items = newData;
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getListLogin };
