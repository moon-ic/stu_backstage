<template>
    <div>
        <TableSearch :query="query" :options="searchOpt" :search="handleSearch" />
        <div class="container">
            <TableCustom :columns="columns" :tableData="tableData" :total="page.total" :viewFunc="handleView"
                :delFunc="handleDelete" :page-change="changePage" :editFunc="handleEdit">
                <template #toolbarBtn>
                    <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true">添加任务分类</el-button>
                </template>
            </TableCustom>

        </div>
        <el-dialog :title="isEdit ? '编辑' : '新增'" v-model="visible" width="700px" destroy-on-close
            :close-on-click-modal="false" @close="closeDialog">
            <TableEdit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData" />
        </el-dialog>
        <el-dialog title="查看详情" v-model="visible1" width="700px" destroy-on-close>
            <TableDetail :data="viewData"></TableDetail>
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="system-user">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { taskCategory } from '@/types/admin';
import { fetchTaskCategory } from '@/api/admin/task_classfy';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import TableSearch from '@/components/table-search.vue';
import { FormOption, FormOptionList } from '@/types/form-option';

// 查询相关
const query = reactive({
    name: '',
});
const searchOpt = ref<FormOptionList[]>([
    { type: 'input', label: '分类名：', prop: 'categoryName' }
])
const handleSearch = () => {
    changePage(1);
};

// 表格相关
let columns = ref([
      {
            prop: 'id',
            label: 'ID',
            type: 'index',
            width: 55, 
            align: 'center' 
        },
        {
            prop: 'categoryName',
            label: '分类名称',
        },
        {
            prop: 'isPopular',
            label: '是否热门',
        },
        {
            prop: 'taskCount',
            label: '分类任务总数',
        },
        {   
            prop: 'operator', 
            label: '操作', 
            width: 250 
        },
    
])
const page = reactive({
    index: 1,
    size: 10,
    total: 0,
})
const tableData = ref<taskCategory[]>([]);
const getData = async () => {
    const res = (await fetchTaskCategory()).data.data;
    tableData.value = res;
    page.total =res;
    console.log(tableData.value);
    console.log(res);
};
getData();

const changePage = (val: number) => {
    page.index = val;
    getData();
};

// 新增/编辑弹窗相关
let options = ref<FormOption>({
    labelWidth: '100px',
    span: 12,
    list: [
        { type: 'input', prop: 'id',label: 'ID', required: true},
        { type: 'input', prop: 'categoryName',label: '分类名称', required: true},
        { type: 'input', prop: 'isPopular',label: '是否热门', required: true},
        { type: 'input', prop: 'taskCount',label: '分类任务总数', required: true}
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row:taskCategory) => {
    rowData.value = { ...row };
    isEdit.value = true;
    visible.value = true;
};
const updateData = () => {
    closeDialog();
    getData();
};

const closeDialog = () => {
    visible.value = false;
    isEdit.value = false;
};

// 查看详情弹窗相关
const visible1 = ref(false);
const viewData = ref({
    row: {},
    list: []
});
const handleView = (row: taskCategory) => {
    viewData.value.row = { ...row }
    viewData.value.list = [
        {
            prop: 'id',
            label: 'ID',
        },
        {
            prop: 'categoryName',
            label: '分类名称',
        },
        {
            prop: 'isPopular',
            label: '是否热门',
        },
        {
            prop: 'taskCount',
            label: '分类任务总数',
        }
    ]
    visible1.value = true;
};

// 删除相关
const handleDelete = (row: taskCategory) => {
    ElMessage.success('删除成功');
}
</script>

<style scoped></style>