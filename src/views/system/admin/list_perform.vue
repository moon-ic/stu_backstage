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
import { fetchPerformer } from '@/api/admin/list_perform';
import TableCustom from '@/components/table-custom.vue';

// 表格相关
let columns = ref([
      {
            prop: 'id',
            label: '执行者ID',
        },
        {
            prop: 'username',
            label: '姓名',
        },
        {
            prop: 'profile',
            label: '简介',
        },
        {
            prop: 'tagline',
            label: '标签',
        },
        {
            prop: 'browseCount',
            label: '被浏览次数',
        },
        {
            prop: 'phone',
            label: '电话',
        },
        {
            prop: 'email',
            label: '邮箱',
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
    const res = (await fetchPerformer()).data.data;
    tableData.value = res;
};
getData();

const changePage = (val: number) => {
    page.index = val;
    getData();
};

</script>

<style scoped></style>