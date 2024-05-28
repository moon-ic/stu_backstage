import request from "../../utils/request";
import { publisher } from "@/types/admin";

/** @description 获取发布者 */
export const fetchPublisher = async () => {
	const res = await request.get("/admin/employer");
	return res;
};
