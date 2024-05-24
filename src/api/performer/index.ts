import request from '../../utils/request';

//雇员退出
export const logout = () => {
    return request({
        url: './employee/logout',
        method: 'get'
    });
};

//获取雇员信息
export const getSelfInfo = () => {
    return request({
        url: './employee/getInfo',
        method: 'get'
    });
};


//获取竞标数量
export const gteBidCount = () => {
    return request({
        url: './employee/BidCount',
        method: 'get'
    });
};

//收藏或取消任务
export const star = (taskId) => {
    return request({
        url: './employee/bookmarked',
        method: 'post',
        data: taskId
    });
};

//全部收藏任务
export const starTasks = () => {
    return request({
        url: './employee/bookmarked',
        method: 'get'
    });
};

//删除收藏任务
export const deleteStarTasks = (taskId) => {
    return request({
        url: './employee/bookmarks/remove',
        method: 'post',
        data: taskId
    });
};

//查询已完成任务
export const completedTask = () => {
    return request({
        url: './employee/task/completed',
        method: 'get',
    });
};

//查询未完成任务
export const unCompletedTask = () => {
    return request({
        url: './employee/task/uncompleted',
        method: 'get',
    });
};

//performer提交任务
export const submitTask = (taskId) => {
    return request({
        url: './employee/task/submit',
        method: 'post',
        data:taskId
    });
};


//我的竞标
export const myBids = () => {
    return request({
        url: './employee/mybids',
        method: 'get'
    });
};

export const deleteBid = (bid) => {
    return request({
        url: `./employee/mybids?bid=${bid}`,
        method: 'get'
    });
};
//获取个人信息页面的信息
export const getAllInfo = () => {
    return request({
        url: 'http://localhost:8080/employee/settings/base',
        method: 'get'
    });
};

//保存个人信息页面的信息
export const saveAllInfo = (employee) => {
    return request({
        url: './employee/settings/base/save',
        method: 'post',
        data:employee
    });
};

//修改密码
export const updatePwd = (password,newPassword) => {
    return request({
        url: './employee/settings/password',
        method: 'post',
        data:{
            password,
            newPassword
        }
    });
};



//对其他执行者的

//获取执行者信息
export const getPerformerInfo = (employeeId) => {
    return request({
        url: './employee/employeeProfile?employeeId=' + employeeId,
        method: 'get',
    });
};

//历史完成任务
export const historyTask = (employeeId) => {
    return request({
        url: './employee/historyTask?employeeId=' + employeeId,
        method: 'get',
    });
};

//完成任务总数
export const getHistoryTaskNum = (employeeId) => {
    return request({
        url: './employee/historyTask?employeeId=' + employeeId,
        method: 'get',
    });
};

//添加技能
export const addSkill = (skillName) => {
    return request({
        url: './employee/skill/add',
        method: 'post',
        data: skillName
    });
};

//删除技能
export const deleteSkill = (skillId) => {
    return request({
        url: './employee/skill/add',
        method: 'post',
        data: skillId
    });
};


//performer投标任务
export const bid = (taskId,bidPrice,timeNumber,timeType) => {
    return request({
        url: './employee/skill/add',
        method: 'post',
        data:{
            taskId,
            bidPrice,
            timeNumber,
            timeType
        }
    });
};







