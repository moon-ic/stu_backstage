/** @description 管理员登录 */
export interface adminReq {
	username: string;
	password: string;
}

export interface adminRes {
	id: number;
	username: string;
	password: string;
}
