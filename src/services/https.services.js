import axios from "axios";
import { handleApiError } from "./error.services"; 

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const userMessage = handleApiError(error);
    error.userMessage = userMessage;

    alert(userMessage);

    return Promise.reject(error);
  }
);



export const getRequest = async (url, config = {}) => {
  try {
    const res = await http.get(url, config);
    return res.data;
  } catch (error) {
    console.error("API Get Error:", error.response?.data || error.message);
    throw error;
  }
};

export const postRequest = async (url, body, config = {}) => {
  try {
    const res = await http.post(url, body, config);
    return res.data;
  } catch (error) {
    console.error("API Post Error:", error.response?.data || error.message);
    throw error;
  }
};

export const putRequest = async (url, body, config = {}) => {
  try {
    const res = await http.put(url, body, config);
    return res.data;
  } catch (error) {
    console.error("API Put Error Response:", error.response?.data);
    console.error("API Put Error Status:", error.response?.status);
    throw error;
  }
};



export const getRequest1 = async (url) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${process.env.REACT_APP_API_BASEURL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const postRequest1 = async (url, body) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${process.env.REACT_APP_API_BASEURL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return {
      status: res.status,
      data,
    };
  } catch (error) {
    console.error(error.message);
    return { status: 500, data: null };
  }
};

export const postRequestMulti = async (url, formData) => {
  try {
    const token = localStorage.getItem("token");
    const baseUrl = (process.env.REACT_APP_API_BASEURL || "")
      .trim()
      .replace(/\/+$/, "");

    const formattedUrl = url.startsWith("/") ? url : `/${url}`;
    const response = await fetch(`${baseUrl}${formattedUrl}`, {
      method: "POST",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: formData,
    });

    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch {
      return { status: "error", message: text };
    }
  } catch (error) {
    console.error("API Error:", error);
    return { status: "error", message: "Request failed" };
  }
};

export const patchRequest = async (url) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${process.env.REACT_APP_API_BASEURL}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error.message);
  }
};  