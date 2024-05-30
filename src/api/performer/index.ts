import request from '../../utils/request';
import qs from "qs";

//��Ա�˳�
export const logout = () => {
    return request({
        url: './employee/logout',
        method: 'post'
    });
};

//��ȡ��Ա��Ϣ
export const getSelfInfo = () => {
    return request({
        url: './employee/getInfo',
        method: 'post'
    });
};


//��ȡ��������
export const gteBidCount = () => {
    return request({
        url: './employee/BidCount',
        method: 'post'
    });
};

//�ղػ�ȡ������
export const star = (taskId) => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/bookmarked?employeeId=' + performer_id + '&taskId=' + taskId,
        method: 'get',
    });
};

//ȫ���ղ�����
export const starTasks = () => {
    let performer_id = localStorage.getItem('performer-id');
    console.log(performer_id)
    return request({
        url: './employee/bookmarks?employeeId=' + performer_id,
        method: 'get',
    });
};

//ɾ���ղ�����
export const deleteStarTasks = (taskId) => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: `./employee/bookmarks/remove?employeeId=${performer_id}&&taskId=${taskId} `,
        method: 'get',
    });
};

//��ѯ���������
export const completedTask = () => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/task/completed?employeeId=' + performer_id,
        method: 'get',
    });
};

//��ѯδ�������
export const unCompletedTask = () => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/task/uncompleted?employeeId=' + performer_id,
        method: 'get',
    });
};

//performer�ύ����
export const submitTask = (taskId) => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: `./employee/task/submit?employeeId=${performer_id}&&taskId=${taskId}`,
        method: 'get'
    });
};


//�ҵľ���
export const myBids = () => {
    let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/mybids?employeeId=' + performer_id,
        method: 'get'
    });
};


//ɾ������
export const deleteBid = (bid) => {
    return request({
        url: `./employee/bid/delete?bid=${bid}`,
        method: 'get'
    });
};
//��ȡ������Ϣҳ�����Ϣ
export const getAllInfo = (performer_id) => {
    // let performer_id = localStorage.getItem('performer-id');
    return request({
        url: './employee/settings/base?employeeId=' + performer_id,
        method: 'get'
    });
};

//���������Ϣҳ�����Ϣ
export const saveAllInfo = (employee) => {
    return request({
        url: './employee/settings/base/save',
        method: 'post',
        data:employee
    });
};

//�޸�����
export const updatePwd = (password,newPassword) => {
    return request({
        url: `./employee/settings/password?password=${password}&&newPassword=${newPassword}`,
        method: 'get'
    });
};



//������ִ���ߵ�

//��ȡִ������Ϣ
//�ɺ���
export const getPerformerInfo = (employeeId) => {
    return request({
        url: './employee/employeeProfile?employeeId=' + employeeId,
        method: 'get',
    });
};

//��ʷ�������
export const historyTask = (employeeId) => {
    return request({
        url: './employee/historyTask?employeeId=' + employeeId,
        method: 'get',
    });
};

//�����������
export const getHistoryTaskNum = (employeeId) => {
    return request({
        url: './employee/historyTask?employeeId=' + employeeId,
        method: 'get',
    });
};

//��Ӽ���
export const addSkill = (skillName) => {
    return request({
        url: './employee/skill/add',
        method: 'post',
        data: skillName
    });
};

//ɾ������
export const deleteSkill = (skillId) => {
    return request({
        url: './employee/skill/delete',
        method: 'post',
        data: skillId
    });
};


//performerͶ������
export const bid = (taskId,bidPrice,timeNumber,timeType) => {
    let employeeId = localStorage.getItem("performer-id")
    return request({
        url: './employee/bid?employeeId='+ employeeId+ '&taskId='+ taskId+'&bidPrice='+bidPrice+'&timeNumber=' + timeNumber + '&timeType=' + timeType,
        method: 'get',
    });
};

//��ȡ�����ҳ���
export const getTaskPageResult = (categoryId, key, page) => {
	return request({
		url: `./task/PageResult?categoryId=${categoryId}&&key=${key}&&page=${page}`,
		method: "get"
	});
};






