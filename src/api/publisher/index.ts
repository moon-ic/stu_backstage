import request from '../../utils/request';
import qs from "qs";


export const logout_publisher = () => {
    return request({
        url:'./employer/logout',
        method:'post',
    });
};


//获取雇主信息
export const getPublisherInfo = () => {
    let publisher_id = localStorage.getItem('publisher-id');
    return request({
        url:'./employer/getInfo?employerId=' + publisher_id,
        method:'get'
    });
};

//保存雇主信息
export const savePublisherInfo = (employer) => {
    return request({
        url:'./employer/saveInfo',
        method:'post',
        data:employer
    });
};


//更新密码
export const updatePwd = (password,newPassword) => {
    let publisher_id = localStorage.getItem('publisher-id');
    return request({
        url:'./employer/updatePwd?employerId='+publisher_id+'&&password='+ password+'&&newPassword=' + newPassword,
        method: 'get',
    });
};

//get发布任务的数量
export const getPublishTaskNum = () => {
    return request({
        url:'./employer/taskNum',
        method:'post'
    });
};

//获得竞标的总数量
export const getTaskBidNum = () => {
    return request({
        url:'./employer/peoNum',
        method:'post'
    });
};

//获得所有完成任务
export const getTaskComple = () => {
    return request({
        url:'./employer/taskComple',
        method:'post'
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
   let publisher_id = localStorage.getItem('publisher-id');
    return request({
        url:'./employer/myTasks?employerId=' + publisher_id,
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
export const submitTask = (skills,task) => {
    return request({
        url:`./employer/task/post?skills=${skills}`,
        method:'post',
        data: task
    });
};

//更新任务
export const updateTask = (task) => {
    return request({
        url:`./employer/task/update`,
        method:'post',
        data:task
    });
};
//删除任务
export const deleteTask = (taskId) => {
    return request({
        url:`./employer/task/delete?taskId=${taskId}`,
        method:'post'
    });
};

//选择雇员接收任务
export const acceptBid = (employeeId,taskId) => {
    return request({
        url:`./employer/acceptBid?employeeId=${employeeId}&&taskId=${taskId}`,
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

//添加技能
export const addSkill = (skillName) => {
    return request({
        url: './employer/skill/add',
        method: 'post',
        data: skillName
    });
};

//删除技能
export const deleteSkill = (skillId) => {
    return request({
        url: './employer/skill/delete',
        method: 'post',
        data: skillId
    });
};





