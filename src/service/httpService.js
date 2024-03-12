import axiosInstance from "./axiosConfig";

const http={
    get:axiosInstance.get,
    put:axiosInstance.put,
    delete:axiosInstance.delete,
    post:axiosInstance.post,
};
export default http;