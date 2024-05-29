import request from "../utils/request";
import { adminRes } from "@/types/login";
import qs from 'qs';
//
export const login_admin = async (username, password): Promise<adminRes> => {
	const res = await request.post(
        "/admin/login",
        { username, password },
        );
	return res.data;
};

export const login_publisher = (username,password) => {
    return request({
        url: '/login_publisher',
        method: 'post',
        data: qs.stringify({
            username: username,
            password: password
        })
    });
};
export const login_performer = (username,password) => {
    return request({
        url: '/login_performer',
        method: 'post',
        data: qs.stringify({
            username: username,
            password: password
        })
    });
};


//
// export const register = (accountType,username,password) => {
//     return request({
//         url: './register',
//         method: 'post',
//         data:{
//             accountType,
//             username,
//             password
//         }
//     });
// };
//
//
// export const getTaskCategoryVo = () => {
//     return request({
//         url:'./TaskCategoryVo',
//         method:'get'
//     });
//
//
// export const login_admin = async (username, password): Promise<adminRes> => {
// 	const res = await request.post("/admin/login", { username, password });
// 	return res.data;
// };
//
// export const login = (accountType, username, password) => {
// 	return request({
// 		url: "./login",
// 		method: "post",
// 		data: {
// 			accountType,
// 			username,
// 			password
// 		}
// 	});
// };
//
// export const register = (accountType, username, password) => {
// 	return request({
// 		url: "./register",
// 		method: "post",
// 		data: {
// 			accountType,
// 			username,
// 			password
// 		}
// 	});
// };
//
// export const getTaskCategoryVo = () => {
// 	return request({
// 		url: "./TaskCategoryVo",
// 		method: "get"
// 	});
// };
//
// export const getTaskPageResult = (categoryId, key, page) => {
// 	return request({
// 		url: `./PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
// 		method: "get"
// 	});
// };
//
// //锟斤拷询锟斤拷锟斤拷
// export const getTaskInfo = (taskId) => {
// 	return request({
// 		url: `./taskInfo?taskId=${taskId}`,
// 		method: "get"
// 	});
// };
//
// //一锟铰诧拷要锟剿ｏ拷锟介烦
// //锟较达拷图片
// export const uploadImage = (taskId, file) => {
// 	const formData = new FormData();
//
// 	// 锟斤拷锟斤拷锟侥硷拷锟斤拷 FormData
// 	formData.append("dropzFile", file);
//
// 	// 锟斤拷锟斤拷锟揭拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟?
// 	formData.append("taskId", taskId);
//
// 	return request({
// 		url: "./upload",
// 		method: "post",
// 		data: formData,
// 		// 锟斤拷锟斤拷 axios 锟斤拷要锟斤拷锟斤拷锟斤拷锟斤拷锟藉，锟斤拷为锟斤拷锟斤拷锟窖撅拷锟斤拷 FormData 锟斤拷锟斤拷锟斤拷锟斤拷
// 		headers: {
// 			"Content-Type": "multipart/form-data"
// 		}
// 	});
// };
//
//
// export const getTaskPageResult = (categoryId,key,page) => {
//     return request({
//         url:`./PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
//         method:'get'
//     });
// };
//
//
// //查询任务
// export const getTaskInfo = (taskId) => {
//     return request({
//         url:`./taskInfo?taskId=${taskId}`,
//         method:'get'
//     });
// };
//
// //一下不要了，麻烦
// //上传图片
// export const uploadImage = (taskId,file) => {
//     const formData = new FormData();
//
//     // 添加文件到 FormData
//     formData.append('dropzFile', file);
//
//     // 如果需要，添加其他参数
//     formData.append('taskId', taskId);
//
//     return request({
//         url: './upload',
//         method: 'post',
//         data: formData,
//         // 告诉 axios 不要处理请求体，因为我们已经用 FormData 设置了它
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     });
// };
//
//
//
//
