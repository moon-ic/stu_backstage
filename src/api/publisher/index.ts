import request from '../../utils/request';


//��ȡ������Ϣ
export const getPublisherInfo = () => {
    return request({
        url:'http://127.0.0.1:8080/employer/getInfo',
        method:'get'
    });
};
//���������Ϣ
export const savePublisherInfo = (employer) => {
    return request({
        url:'http://127.0.0.1:8080/employer/saveInfo',
        method:'post',
        data: employer
    });
};


//��������
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


//get�������������
export const getPublishTaskNum = () => {
    return request({
        url:'./employer/taskNum',
        method:'get'
    });
};
//��þ����������
export const getTaskBidNum = () => {
    return request({
        url:'./employer/peoNum',
        method:'get'
    });
};
//��������������
export const getTaskComple = () => {
    return request({
        url:'./employer/taskComple',
        method:'get'
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
    return request({
        url:'./employer/myTasks',
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
export const submitTask = (skills,upload,task) => {
    return request({
        url:`./employer/task/post?skills=${skills}&upload=${upload}`,
        method:'post',
        data: task
    });
};

//��������
export const updateTask = (task,upload) => {
    return request({
        url:`./employer/task/update?upload=${upload}`,
        method:'post',
        data:task
    });
};
//ɾ������
export const deleteTask = (taskId) => {
    return request({
        url:`./employer/task/delete?taskId=${taskId}`,
        method:'get'
    });
};

//ѡ���Ա��������
export const acceptBid = (taskId,employeeId) => {
    return request({
        url:`./employer/acceptBid?taskId=${taskId}&&employeeId=${employeeId}`,
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







