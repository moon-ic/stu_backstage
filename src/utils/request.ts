import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "@/config";

axios.defaults.withCredentials=true;

const service: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 50000
});

service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		return config;
	},
	(error: AxiosError) => {
		console.log(error);
		return Promise.reject();
	}
);

service.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.status === 200) {
			return response;
		} else {
			Promise.reject();
		}
	},
	(error: AxiosError) => {
		console.log(error);
		return Promise.reject();
	}
);

export default service;
