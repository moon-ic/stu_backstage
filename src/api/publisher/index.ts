import request from '../../utils/request';
import qs from "qs";


export const logout_publisher = () => {
    return request({
        url:'./employer/logout',
        method:'post',
    });
};


//��ȡ������Ϣ
export const getPublisherInfo = () => {
    let publisher_id = localStorage.getItem('publisher-id');
    return request({
        url:'./employer/getInfo?employerId=' + publisher_id,
        method:'get'
    });
};

//���������Ϣ
export const savePublisherInfo = (employer) => {
    return request({
        url:'./employer/saveInfo',
        method:'post',
        data:employer
    });
};


//��������
export const updatePwd = (password,newPassword) => {
    let publisher_id = localStorage.getItem('publisher-id');
    return request({
        url:'./employer/updatePwd?employerId='+publisher_id+'&&password='+ password+'&&newPassword=' + newPassword,
        method: 'get',
    });
};

//get�������������
export const getPublishTaskNum = () => {
    return request({
        url:'./employer/taskNum',
        method:'post'
    });
};

//��þ����������
export const getTaskBidNum = () => {
    return request({
        url:'./employer/peoNum',
        method:'post'
    });
};

//��������������
export const getTaskComple = () => {
    return request({
        url:'./employer/taskComple',
        method:'post'
    });
};

//��ȡ�������
export const getTaskCategorys = () => {
    return request({
        url:'./employer/taskCategorys',
        method:'get'
    });
};


//������������
export const getAllTasks = () => {
   let publisher_id = localStorage.getItem('publisher-id');
    return request({
        url:'./employer/myTasks?employerId=' + publisher_id,
        method:'get'
    });
};

//��ȡĳ���������Ϣ    �鿴����������Ա��Ϣ   �鿴���񷢲�
export const getTaskInfo = (taskId) => {
    return request({
        url:`./employer/getTaskInfo?taskId=${taskId}`,
        method:'get'
    });
};

//�ϴ�����    ע�����
export const submitTask = (skills,task) => {
    return request({
        url:`./employer/task/post?skills=${skills}`,
        method:'post',
        data: task
    });
};

//��������
export const updateTask = (task) => {
    return request({
        url:`./employer/task/update`,
        method:'post',
        data:task
    });
};
//ɾ������
export const deleteTask = (taskId) => {
    return request({
        url:`./employer/task/delete?taskId=${taskId}`,
        method:'post'
    });
};

//ѡ���Ա��������
export const acceptBid = (employeeId,taskId) => {
    return request({
        url:`./employer/acceptBid?employeeId=${employeeId}&&taskId=${taskId}`,
        method:'get'
    });
};

//ȷ���������
export const taskSuccess = (taskId) => {
    return request({
        url:`./employer/task/success?taskId=${taskId}`,
        method:'get'
    });
};

//��Ӽ���
export const addSkill = (skillName) => {
    return request({
        url: './employer/skill/add',
        method: 'post',
        data: skillName
    });
};

//ɾ������
export const deleteSkill = (skillId) => {
    return request({
        url: './employer/skill/delete',
        method: 'post',
        data: skillId
    });
};





