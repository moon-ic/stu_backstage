import request from '../../utils/request';
import qs from "qs";

//雇员退出
export const logout = () => {
    return request({
        url: './employee/logout',
        method: 'post'
    });
};

//获取雇员信息
export const getSelfInfo = () => {
    return request({
        url: './employee/getInfo',
        method: 'post'
    });
};


//获取竞标数量
export const gteBidCount = () => {
    return request({
        url: './employee/BidCount',
        method: 'post'
    });
};

//收藏或取消任务
export const star = (taskId) => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/bookmarked?employeeId=' + performer_id + '&taskId=' + taskId,
        method: 'get',
    });
};

//全部收藏任务
export const starTasks = () => {
    let performer_id = localStorage.getItem('performer-id');
    console.log(performer_id)
    return request({
        url: './employee/bookmarks?employeeId=' + performer_id,
        method: 'get',
    });
};

//删除收藏任务
export const deleteStarTasks = (taskId) => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: `./employee/bookmarks/remove?employeeId=${performer_id}&&taskId=${taskId} `,
        method: 'get',
    });
};

//查询已完成任务
export const completedTask = () => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/task/completed?employeeId=' + performer_id,
        method: 'get',
    });
};

//查询未完成任务
export const unCompletedTask = () => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/task/uncompleted?employeeId=' + performer_id,
        method: 'get',
    });
};

//performer提交任务
export const submitTask = (taskId) => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: `./employee/task/submit?employeeId=${performer_id}&&taskId=${taskId}`,
        method: 'get'
    });
};


//我的竞标
export const myBids = () => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/mybids?employeeId=' + performer_id,
        method: 'get'
    });
};


//删除竞标
export const deleteBid = (bid) => {
    return request({
        url: `./employee/bid/delete?bid=${bid}`,
        method: 'get'
    });
};
//获取个人信息页面的信息
export const getAllInfo = (performer_id) => {
    // let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/settings/base?employeeId=' + performer_id,
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
        url: `./employee/settings/password?password=${password}&&newPassword=${newPassword}`,
        method: 'get'
    });
};



//对其他执行者的

//获取执行者信息
//可忽略
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
        url: './employee/skill/delete',
        method: 'post',
        data: skillId
    });
};


//performer投标任务
export const bid = (taskId,bidPrice,timeNumber,timeType) => {
    let employeeId = localStorage.getItem("performer-id")
    return request({
        url: './employee/bid?employeeId='+ employeeId+ '&taskId='+ taskId+'&bidPrice='+bidPrice+'&timeNumber=' + timeNumber + '&timeType=' + timeType,
        method: 'get',
    });
};

//获取任务分页结果
export const getTaskPageResult = (categoryId, key, page) => {
	return request({
		url: `./task/PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
		method: "get"
	});
};






