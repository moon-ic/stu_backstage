import request from "../utils/request";
import { adminRes } from "@/types/login";

<<<<<<< HEAD

export const login = (accountType,username,password) => {
    return request({
        url: './login',
        method: 'post',
        data:{
            accountType,
            username,
            password
        }
    });
};


export const register = (accountType,username,password) => {
    return request({
        url: './register',
        method: 'post',
        data:{
            accountType,
            username,
            password
        }
    });
};


export const getTaskCategoryVo = () => {
    return request({
        url:'./TaskCategoryVo',
        method:'get'
    });
=======
/** @description ç®¡ç†å‘˜ç™»å½• */
export const login_admin = async (username, password): Promise<adminRes> => {
	const res = await request.post("/admin/login", { username, password });
	return res.data;
};

export const login = (accountType, username, password) => {
	return request({
		url: "./login",
		method: "post",
		data: {
			accountType,
			username,
			password
		}
	});
};

export const register = (accountType, username, password) => {
	return request({
		url: "./register",
		method: "post",
		data: {
			accountType,
			username,
			password
		}
	});
};

export const getTaskCategoryVo = () => {
	return request({
		url: "./TaskCategoryVo",
		method: "get"
	});
};

export const getTaskPageResult = (categoryId, key, page) => {
	return request({
		url: `./PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
		method: "get"
	});
};

//ï¿½ï¿½Ñ¯ï¿½ï¿½ï¿½ï¿½
export const getTaskInfo = (taskId) => {
	return request({
		url: `./taskInfo?taskId=${taskId}`,
		method: "get"
	});
};

//Ò»ï¿½Â²ï¿½Òªï¿½Ë£ï¿½ï¿½é·³
//ï¿½Ï´ï¿½Í¼Æ¬
export const uploadImage = (taskId, file) => {
	const formData = new FormData();

	// ï¿½ï¿½ï¿½ï¿½ï¿½Ä¼ï¿½ï¿½ï¿½ FormData
	formData.append("dropzFile", file);

	// ï¿½ï¿½ï¿½ï¿½ï¿½Òªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
	formData.append("taskId", taskId);

	return request({
		url: "./upload",
		method: "post",
		data: formData,
		// ï¿½ï¿½ï¿½ï¿½ axios ï¿½ï¿½Òªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å£¬ï¿½ï¿½Îªï¿½ï¿½ï¿½ï¿½ï¿½Ñ¾ï¿½ï¿½ï¿½ FormData ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
		headers: {
			"Content-Type": "multipart/form-data"
		}
	});
>>>>>>> master
};


export const getTaskPageResult = (categoryId,key,page) => {
    return request({
        url:`./PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
        method:'get'
    });
};


//²éÑ¯ÈÎÎñ
export const getTaskInfo = (taskId) => {
    return request({
        url:`./taskInfo?taskId=${taskId}`,
        method:'get'
    });
};

//Ò»ÏÂ²»ÒªÁË£¬Âé·³
//ÉÏ´«Í¼Æ¬
export const uploadImage = (taskId,file) => {
    const formData = new FormData();

    // Ìí¼ÓÎÄ¼şµ½ FormData
    formData.append('dropzFile', file);

    // Èç¹ûĞèÒª£¬Ìí¼ÓÆäËû²ÎÊı
    formData.append('taskId', taskId);

    return request({
        url: './upload',
        method: 'post',
        data: formData,
        // ¸æËß axios ²»Òª´¦ÀíÇëÇóÌå£¬ÒòÎªÎÒÃÇÒÑ¾­ÓÃ FormData ÉèÖÃÁËËü
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};




