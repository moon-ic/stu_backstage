import request from '../utils/request';


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
};


export const getTaskPageResult = (categoryId,key,page) => {
    return request({
        url:`./PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
        method:'get'
    });
};


//查询任务
export const getTaskInfo = (taskId) => {
    return request({
        url:`./taskInfo?taskId=${taskId}`,
        method:'get'
    });
};

//一下不要了，麻烦
//上传图片
export const uploadImage = (taskId,file) => {
    const formData = new FormData();

    // 添加文件到 FormData
    formData.append('dropzFile', file);

    // 如果需要，添加其他参数
    formData.append('taskId', taskId);

    return request({
        url: './upload',
        method: 'post',
        data: formData,
        // 告诉 axios 不要处理请求体，因为我们已经用 FormData 设置了它
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};




