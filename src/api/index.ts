import request from "../utils/request";
import { adminRes } from "@/types/login";

/** @description 管理员登录 */
export const login_admin = async (username, password): Promise<adminRes> => {
	const res = await request.post("/admin/login", { username, password });
	return res.data;
};

export const login = (accountType, username, password) => {
	return request({
		url: "./login",
		method: "post",
		data: {
			accountType,
			username,
			password
		}
	});
};

export const register = (accountType, username, password) => {
	return request({
		url: "./register",
		method: "post",
		data: {
			accountType,
			username,
			password
		}
	});
};

export const getTaskCategoryVo = () => {
	return request({
		url: "./TaskCategoryVo",
		method: "get"
	});
};

export const getTaskPageResult = (categoryId, key, page) => {
	return request({
		url: `./PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
		method: "get"
	});
};

//��ѯ����
export const getTaskInfo = (taskId) => {
	return request({
		url: `./taskInfo?taskId=${taskId}`,
		method: "get"
	});
};

//һ�²�Ҫ�ˣ��鷳
//�ϴ�ͼƬ
export const uploadImage = (taskId, file) => {
	const formData = new FormData();

	// �����ļ��� FormData
	formData.append("dropzFile", file);

	// �����Ҫ��������������
	formData.append("taskId", taskId);

	return request({
		url: "./upload",
		method: "post",
		data: formData,
		// ���� axios ��Ҫ���������壬��Ϊ�����Ѿ��� FormData ��������
		headers: {
			"Content-Type": "multipart/form-data"
		}
	});
};
