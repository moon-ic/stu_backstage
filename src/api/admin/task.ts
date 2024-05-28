import request from "../../utils/request";
import { fixTaskCategoryReq } from "@/types/admin";

/** @description 所有任务 */
export const fetchTask = async () => {
	const res = await request.get("/admin/task");
	return res;
};

/** @description 待审核任务 */
export const fetchCheckTask = async () => {
	const res = await request.get("/admin/task/check");
	return res;
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
