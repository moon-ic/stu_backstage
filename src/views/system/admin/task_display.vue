<template>
    <div>
        <div class="container">
            <TableCustom :columns="columns" :tableData="tableData" :page-change="changePage" >
            </TableCustom>

        </div>
    </div>
</template>

<script setup lang="ts" name="system-user">
import { ref, reactive } from 'vue';
import { taskCategory } from '@/types/admin';
import { fetchTask } from '@/api/admin/task';
import TableCustom from '@/components/table-custom.vue';

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
            prop: 'taskCategory.categoryName',
            label: '任务分类',
        },
        {
            prop: 'employer.username',
            label: '雇主',
        },
        {
            prop: 'employee.username',
            label: '完成任务雇员',
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
        }
])
const page = reactive({
    index: 1,
    size: 10,
    total: 0,
})

const tableData = ref<taskCategory[]>([]);
const getData = async () => {
    const res = (await fetchTask()).data.data;
    tableData.value = res;
};
getData();

const changePage = (val: number) => {
    page.index = val;
    getData();
};

</script>

<style scoped></style>