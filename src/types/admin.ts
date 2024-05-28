/** @description 所有任务分类 */
export interface taskCategory {
	id: number;
	categoryName: string;
	categoryImg: string;
	isPopular: number; //0,1
	taskCount: number;
	status?: number; //没用的字段
}

/** @description 添加分类 */
export interface addTaskCategoryReq {
	categoryName: string;
	categoryImg: string;
}

/** @description 更改分类 */
export interface fixTaskCategoryReq {
	id: number;
}

export interface fixTaskCategoryRes {
	id: number;
	categoryName: string;
	categoryImg: string;
	isPopular: number; //0,1
}

/** @description 获取发布者 */
export interface publisher {
	id: string;
	username: string;
}

/** @description 获取执行者 */
export interface performer {
	id: string;
	username: string;
}

/** @description 所有任务 */
export interface task {
	id: number;
	taskCategory: {
		id: number;
		categoryName: string;
		categoryImg: string;
		isPopular: number; //0,1
	};
	employer: {
		id: number;
		username: string;
		password: string;
		headImg: string;
		phone: string;
		email: string;
		createTime: string;
	};
	employee: {
		id: number;
		username: string;
		password: string;
		email: string;
		phone: string;
		headImg: string;
		tagline: string;
		profile: string;
		browseCount: number;
		createTime: string;
	};
	skills: {
		id: number;
		skillName: string;
		taskId: number;
	}[];
	bidVos: {
		employee: {
			id: number;
			username: string;
			password: string;
			email: string;
			phone: string;
			headImg: string;
			tagline: string;
			profile: string;
			browseCount: number;
			createTime: string;
		};
		id: number;
		bidPrice: number;
		deliveryDesc: string;
		deliveryTime: string;
		bidStatus: number;
		createTime: string;
		task: object;
	}[];
	taskTitle: string;
	taskProfile: string;
	taskDesc: string;
	feesLow: number;
	feesHigh: number;
	feesFile: string;
	filename: string;
	taskPrice: number;
	taskStatus: number;
	bidTime: string;
	closeTime: string;
	createTime: string;
	beforeTime: string;
	expireTime: string;
	avgPrice: number;
}
[];
