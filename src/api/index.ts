import request from "../utils/request";
import { adminReq, adminRes } from "@/types/login";

/** @description 管理员登录 */
export const login_admin = async (params: adminReq): Promise<adminRes> => {
	const res = await request.post("/admin/login", params);
	return res.data;
};
