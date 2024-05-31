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
export const checkTaskSuccess = async (id): Promise<string> => {
	const res = await request.get(`/admin/task/checkSuccess?taskId=${id}`);
	return res.data;
};

/** @description 审核不通过 */
export const checkTaskUnsuccess = async (id): Promise<string> => {
	const res = await request.get(`/admin/task/unCheckSuccess?taskId=${id}`);
	return res.data;
};
