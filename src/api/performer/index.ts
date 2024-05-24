import request from '../../utils/request';

//��Ա�˳�
export const logout = () => {
    return request({
        url: './employee/logout',
        method: 'get'
    });
};

//��ȡ��Ա��Ϣ
export const getSelfInfo = () => {
    return request({
        url: './employee/getInfo',
        method: 'get'
    });
};


//��ȡ��������
export const gteBidCount = () => {
    return request({
        url: './employee/BidCount',
        method: 'get'
    });
};

//�ղػ�ȡ������
export const star = (taskId) => {
    return request({
        url: './employee/bookmarked',
        method: 'post',
        data: taskId
    });
};

//ȫ���ղ�����
export const starTasks = () => {
    return request({
        url: './employee/bookmarked',
        method: 'get'
    });
};

//ɾ���ղ�����
export const deleteStarTasks = (taskId) => {
    return request({
        url: './employee/bookmarks/remove',
        method: 'post',
        data: taskId
    });
};

//��ѯ���������
export const completedTask = () => {
    return request({
        url: './employee/task/completed',
        method: 'get',
    });
};

//��ѯδ�������
export const unCompletedTask = () => {
    return request({
        url: './employee/task/uncompleted',
        method: 'get',
    });
};

//performer�ύ����
export const submitTask = (taskId) => {
    return request({
        url: './employee/task/submit',
        method: 'post',
        data:taskId
    });
};


//�ҵľ���
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
//��ȡ������Ϣҳ�����Ϣ
export const getAllInfo = () => {
    return request({
        url: 'http://localhost:8080/employee/settings/base',
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
        url: './employee/settings/password',
        method: 'post',
        data:{
            password,
            newPassword
        }
    });
};



//������ִ���ߵ�

//��ȡִ������Ϣ
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
        url: './employee/skill/add',
        method: 'post',
        data: skillId
    });
};


//performerͶ������
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







