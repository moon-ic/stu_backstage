import request from "../../utils/request";
import { performer } from "@/types/admin";

/** @description 获取执行者 */
export const fetchPerformer = async (): Promise<performer> => {
	const res = await request.get("/admin/employee");
	return res.data;
};
