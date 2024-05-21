import request from "../utils/request";
import { adminRequire, adminResponse } from "@/types/login";

/** @description 管理员登录 */
export const login_admin = async ({ username, password }: adminRequire): Promise<adminResponse> => {
	const res = await request.post("/admin/login", { username, password });
	return res.data;
};
