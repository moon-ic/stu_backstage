import request from "../utils/request";
import { addTaskCategoryReq, fixTaskCategoryReq, fixTaskCategoryRes, performer, publisher, task, taskCategory } from "@/types/admin";

export const fetchData = () => {
	return request({
		url: "./mock/table.json",
		method: "get"
	});
};

export const fetchUserData = () => {
	return request({
		url: "./mock/user.json",
		method: "get"
	});
};

export const fetchRoleData = () => {
	return request({
		url: "./mock/role.json",
		method: "get"
	});
};

// 1.
/** @description 所有任务分类 */
export const fetchTaskCategory = async (): Promise<taskCategory> => {
	const res = await request.get("/admin/task/category");
	return res.data;
};

/** @description 添加分类 */
export const addTaskCategory = async (params: addTaskCategoryReq): Promise<string> => {
	const res = await request.post("/admin/task/category/save", params);
	return res.data;
};

/** @description 更改分类 */
export const fixTaskCategory = async (params: fixTaskCategoryReq): Promise<fixTaskCategoryRes> => {
	const res = await request.get(`/admin/task/category/form?id=${params.id}`);
	return res.data;
};

/** @description 删除分类 */
export const delTaskCategory = async (params: fixTaskCategoryReq): Promise<string> => {
	const res = await request.get(`/admin/task/category/delete/${params.id}`);
	return res.data;
};

// 2.
/** @description 获取发布者 */
export const fetchPublisher = async (): Promise<publisher> => {
	const res = await request.get("/admin/employer");
	return res.data;
};

// 3.
/** @description 获取执行者 */
export const fetchPerformer = async (): Promise<performer> => {
	const res = await request.get("/admin/employee");
	return res.data;
};

// 4.
/** @description 所有任务 */
export const fetchTask = async (): Promise<task> => {
	const res = await request.get("/admin/task");
	return res.data;
};

/** @description 待审核任务 */
export const fetchCheckTask = async (): Promise<task> => {
	const res = await request.get("/admin/task/check");
	return res.data;
};

/** @description 审核通过 */
export const checkTaskSuccess = async (params: fixTaskCategoryReq): Promise<string> => {
	const res = await request.get(`/admin/task/checkSuccess?taskId=${params.id}`);
	return res.data;
};

/** @description 审核不通过 */
export const checkTaskUnsuccess = async (params: fixTaskCategoryReq): Promise<string> => {
	const res = await request.get(`/admin/task/check/unCheckSuccess?taskId=${params.id}`);
	return res.data;
};
