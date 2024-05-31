import request from "../../utils/request";
import { addTaskCategoryReq, fixTaskCategoryReq, fixTaskCategoryRes } from "@/types/admin";

/** @description 所有任务分类 */
export const fetchTaskCategory = async () => {
	const res = await request.get("/admin/task/category");
	return res;
};

/** @description 添加分类 */
export const addTaskCategory = async (categoryName, categoryImg): Promise<string> => {
	const res = await request.post("/admin/task/category/save", { categoryName, categoryImg });
	return res.data;
};

/** @description 更改分类 */
export const fixTaskCategory = async (id): Promise<fixTaskCategoryRes> => {
	const res = await request.get(`/admin/task/category/form?id=${id}`);
	return res.data;
};

/** @description 删除分类 */
export const delTaskCategory = async (id): Promise<string> => {
	const res = await request.get(`/admin/task/category/delete/${id}`);
	return res.data;
};
