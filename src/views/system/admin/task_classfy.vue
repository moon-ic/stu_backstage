<template>
    <div>
        <div class="container">
            <TableCustom :columns="columns" :tableData="tableData" :viewFunc="handleView"
                :delFunc="handleDelete" :page-change="changePage" :editFunc="handleEdit">
                <template #toolbarBtn>
                    <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true">添加任务分类</el-button>
                </template>
            </TableCustom>

        </div>
        <el-dialog :title="isEdit ? '编辑' : '新增'" v-model="visible" width="700px" destroy-on-close
            :close-on-click-modal="false" @close="closeDialog">
            <TableEdit  v-model="rowData.categoryName" :form-data="rowData" :options="options" :edit="isEdit" :update="submitData" />
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
import { fetchTaskCategory,addTaskCategory,delTaskCategory } from '@/api/admin/task_classfy';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import { FormOption, FormOptionList } from '@/types/form-option';

// 表格相关
let columns = ref([
      {
            prop: 'id',
            label: 'ID',
        },
        {
            prop: 'categoryName',
            label: '分类名称',
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
};
getData();

const changePage = (val: number) => {
    page.index = val;
    getData();
};

// 新增/编辑弹窗相关
let options = ref<FormOption>({
    labelWidth: '150px',
    span: 15,
    list: [
        { type: 'input', prop: 'categoryName',label: '分类名称', required: true},
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref<taskCategory>({} as taskCategory);

const handleEdit = async(row:taskCategory) => {
    rowData.value = { ...row };
    getData();
    isEdit.value = true;
    visible.value = true;
};

const submitData = async () => {
    try {
        const { categoryName, categoryImg } = rowData.value;
        await addTaskCategory(categoryName, categoryImg || ' ');
        ElMessage.success('新增成功');
        closeDialog();
        getData();
    } catch (error) {
        ElMessage.error(isEdit.value ? '编辑失败' : '新增失败');
    }
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
            prop: 'taskCount',
            label: '分类任务总数',
        }
    ]
    visible1.value = true;
};

// 删除相关
const handleDelete = async(row: taskCategory) => {
    try{
        await delTaskCategory(row.id);
        await ElMessage.success('删除成功');
        await getData();
    }catch{
        ElMessage.success('删除失败');
    }
}
</script>

<style scoped></style>