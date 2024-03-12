// const axios = require('axios');
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("request intercepted")
    // Set default headers
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";

    // Add authorization header if user is logged in
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      config.headers["Authorization"] = `Bearer ${userData.token}`;
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response (optional)
    console.log("response intercepted")
    return response;
  },
  (error) => {
    const isExpectedError =
      error.response && error.response.status >= 400 && error.response.status <= 500;
    if (!isExpectedError) {
      console.log("Unexpected Error", error);
    }

    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (401)
      localStorage.removeItem("user");
      window.location.replace("/login"); // Redirect to login page
    }

    return Promise.reject(error); // Pass control to error handling
  }
);

 export default  axiosInstance;
