import request from '../../utils/request';


//获取雇主信息
export const getPublisherInfo = () => {
    return request({
        url:'http://127.0.0.1:8080/employer/getInfo',
        method:'get'
    });
};
//保存雇主信息
export const savePublisherInfo = (employer) => {
    return request({
        url:'http://127.0.0.1:8080/employer/saveInfo',
        method:'post',
        data: employer
    });
};


//更新密码
export const updatePwd = (password,newPassword) => {
    return request({
        url:'./employer/updatePwd',
        method: 'post',
        data:{
            password,
            newPassword
        }
    });
};

export const logout = () => {
    return request({
        url: './employer/logout',
        method: 'get'
    });
};


//get发布任务的数量
export const getPublishTaskNum = () => {
    return request({
        url:'./employer/taskNum',
        method:'get'
    });
};
//获得竞标的总数量
export const getTaskBidNum = () => {
    return request({
        url:'./employer/peoNum',
        method:'get'
    });
};
//获得所有完成任务
export const getTaskComple = () => {
    return request({
        url:'./employer/taskComple',
        method:'get'
    });
};
//获取任务分类
export const getTaskCategorys = () => {
    return request({
        url:'./employer/taskCategorys',
        method:'get'
    });
};


//雇主所有任务
export const getAllTasks = () => {
    return request({
        url:'./employer/myTasks',
        method:'get'
    });
};

//获取某个任务的信息    查看竞标任务人员消息   查看任务发布
export const getTaskInfo = (taskId) => {
    return request({
        url:`./employer/getTaskInfo?taskId=${taskId}`,
        method:'get'
    });
};

//上传任务    注意参数
export const submitTask = (skills,upload,task) => {
    return request({
        url:`./employer/task/post?skills=${skills}&upload=${upload}`,
        method:'post',
        data: task
    });
};

//更新任务
export const updateTask = (task,upload) => {
    return request({
        url:`./employer/task/update?upload=${upload}`,
        method:'post',
        data:task
    });
};
//删除任务
export const deleteTask = (taskId) => {
    return request({
        url:`./employer/task/delete?taskId=${taskId}`,
        method:'get'
    });
};

//选择雇员接收任务
export const acceptBid = (taskId,employeeId) => {
    return request({
        url:`./employer/acceptBid?taskId=${taskId}&&employeeId=${employeeId}`,
        method:'get'
    });
};

//确定完成任务
export const taskSuccess = (taskId) => {
    return request({
        url:`./employer/task/success?taskId=${taskId}`,
        method:'get'
    });
};







