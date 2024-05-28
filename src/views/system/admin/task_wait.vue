<template>
    <div>
        <div class="container">
            <TableCustom :columns="columns" :tableData="tableData" :page-change="changePage" >
            </TableCustom>
        </div>
        <el-dialog :title="'审核'" v-model="visible"  width="700px" destroy-on-close :close-on-click-modal="false" @close="closeDialog">
            <TableEdit :form-data="rowData" :options="options" :update="submitData" />
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="system-user">
import { ref, reactive } from 'vue';
import { task } from '@/types/admin';
import { fetchCheckTask } from '@/api/admin/task';
import TableCustom from '@/components/table-custom.vue';
import { checkTaskSuccess } from '@/api/admin/task';
import { checkTaskUnsuccess } from '@/api/admin/task';
import { ElMessage } from 'element-plus';
import { FormOption } from '@/types/form-option';

// 表格相关
let columns = ref([
        {
            prop: 'id',
            label: '任务ID',
        },
        {
            prop: 'taskTitle',
            label: '任务标题',
        },
        {
            prop: 'task',
            label: '任务分类',
        },
        {
            prop: 'employer',
            label: '雇主',
        },
        {
            prop: 'taskStatus',
            label: '任务状态',
        },
        {
            prop: 'taskPrice',
            label: '成交价',
        },
        {
            prop: 'bidTime',
            label: '成交时间',
        },
        {
            prop: 'createTime',
            label: '创建时间',
        },
        {   
            prop: 'operator1', 
            label: '操作', 
        },
])
const page = reactive({
    index: 1,
    size: 10,
    total: 0,
})

const tableData = ref<task[]>([]);
const getData = async () => {
    const res = (await fetchCheckTask()).data.data;
    tableData.value = res;
};
getData();

let options = ref<FormOption>({
    labelWidth: '150px',
    span: 15,
    list: [
        { type: 'select', prop: 'taskStatus',label: '审核', required: true},
    ]
})
const visible = ref(false);
const rowData = ref<task>({} as task);

const handleEdit = async(row:task) => {
    rowData.value = { ...row };
    getData();
    visible.value = true;
};

const submitData = async (row) => {
    try {
        rowData.value = { ...row };
        const { id, taskStatus } = rowData.value;
        if(taskStatus===0){//从0-》-1
            await checkTaskSuccess(id);
        }else if(taskStatus===-1){//从-1-》0
            await checkTaskUnsuccess(id);
        }
        closeDialog();
        getData();
    } catch (error) {
       ElMessage.success('提交审核失败');
    }
};

const closeDialog = () => {
    visible.value = false;
};


const changePage = (val: number) => {
    page.index = val;
    getData();
};

</script>

<style scoped></style>