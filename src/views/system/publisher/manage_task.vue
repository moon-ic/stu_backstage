<template>
<<<<<<< HEAD
    <div>
        <TableSearch :query="query" :options="searchOpt" :search="handleSearch" />
        <div class="container">
            <TableCustom :columns="columns" :tableData="tableData" :total="page.total" :viewFunc="handleView"
                :delFunc="handleDelete" :page-change="changePage" :editFunc="handleEdit">
                <template #toolbarBtn>
                    <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true">ĞÂÔö</el-button>
                </template>
            </TableCustom>

        </div>
        <el-dialog :title="isEdit ? '±à¼­' : 'ĞÂÔö'" v-model="visible" width="700px" destroy-on-close
            :close-on-click-modal="false" @close="closeDialog">
            <TableEdit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData" />
        </el-dialog>
        <el-dialog title="²é¿´ÏêÇé" v-model="visible1" width="700px" destroy-on-close>
            <TableDetail :data="viewData"></TableDetail>
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="system-user">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { User } from '@/types/user';
import { fetchUserData } from '@/api';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import TableSearch from '@/components/table-search.vue';
import { FormOption, FormOptionList } from '@/types/form-option';

// ²éÑ¯Ïà¹Ø
const query = reactive({
    name: '',
});
const searchOpt = ref<FormOptionList[]>([
    { type: 'input', label: 'ÓÃ»§Ãû£º', prop: 'name' }
])
const handleSearch = () => {
    changePage(1);
};

// ±í¸ñÏà¹Ø
let columns = ref([
    { type: 'index', label: 'ĞòºÅ', width: 55, align: 'center' },
    { prop: 'name', label: 'ÓÃ»§Ãû' },
    { prop: 'phone', label: 'ÊÖ»úºÅ' },
    { prop: 'role', label: '½ÇÉ«' },
    { prop: 'operator', label: '²Ù×÷', width: 250 },
])
const page = reactive({
    index: 1,
    size: 10,
    total: 0,
})
const tableData = ref<User[]>([]);
const getData = async () => {
    const res = await fetchUserData()
    tableData.value = res.data.list;
    page.total = res.data.pageTotal;
};
getData();

const changePage = (val: number) => {
    page.index = val;
    getData();
};

// ĞÂÔö/±à¼­µ¯´°Ïà¹Ø
let options = ref<FormOption>({
    labelWidth: '100px',
    span: 12,
    list: [
        { type: 'input', label: 'ÓÃ»§Ãû', prop: 'name', required: true },
        { type: 'input', label: 'ÊÖ»úºÅ', prop: 'phone', required: true },
        { type: 'input', label: 'ÃÜÂë', prop: 'password', required: true },
        { type: 'input', label: 'ÓÊÏä', prop: 'email', required: true },
        { type: 'input', label: '½ÇÉ«', prop: 'role', required: true },
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row: User) => {
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

// ²é¿´ÏêÇéµ¯´°Ïà¹Ø
const visible1 = ref(false);
const viewData = ref({
    row: {},
    list: []
});
const handleView = (row: User) => {
    viewData.value.row = { ...row }
    viewData.value.list = [
        {
            prop: 'id',
            label: 'ÓÃ»§ID',
        },
        {
            prop: 'name',
            label: 'ÓÃ»§Ãû',
        },
        {
            prop: 'password',
            label: 'ÃÜÂë',
        },
        {
            prop: 'email',
            label: 'ÓÊÏä',
        },
        {
            prop: 'phone',
            label: 'µç»°',
        },
        {
            prop: 'role',
            label: '½ÇÉ«',
        },
        {
            prop: 'date',
            label: '×¢²áÈÕÆÚ',
        },
    ]
    visible1.value = true;
};

// É¾³ıÏà¹Ø
const handleDelete = (row: User) => {
    ElMessage.success('É¾³ı³É¹¦');
}
</script>

<style scoped></style>
=======
  <div>
    <h2>æˆ‘çš„ä»»åŠ¡</h2>

    <div v-if="tasks.length > 0">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div>
<!--         status===1 ä»»åŠ¡å·²å®Œæˆ  0 ä»»åŠ¡æœªå®Œæˆ-->
            <!-- ä»»åŠ¡åå­—-->
            <h3>{{task.title }}</h3>
            <p>å®Œæˆæ—¶é—´:{{ task.publishTime }}</p>
            <p>æŠ•æ ‡äººæ•°ï¼š{{ task.biddersCount }}</p>
            <p>å¹³å‡ç«æ ‡ä»·æ ¼{{ task.averageBid }}</p>
            <p v-if="task.status ===0 ">ä»»åŠ¡é¢„ç®—ï¼š{{ task.budget }}</p>
            <p v-else>æˆäº¤ä»·æ ¼ï¼š{{task.bid}}</p>
          </div>
          <div v-if="task.status === 0">
            <button @click="manageBidders(task.id)">ç®¡ç†ç«æ ‡è€…</button>
            <button @click="editTask(task.id)">æ›´æ”¹ä»»åŠ¡</button>
            <button @click="deleteTask(task.id)">åˆ é™¤ä»»åŠ¡</button>
          </div>
          <div v-else>
            <button @click="browseBidders(task.id)">æµè§ˆæ‰§è¡Œè€…ä¿¡æ¯</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>æ‚¨è¿˜æ²¡æœ‰å‘å¸ƒè¿‡ä»»åŠ¡ï¼ï¼ï¼</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: 'è¿™æ˜¯1', publishTime: '2024-05-21', biddersCount: 3, averageBid: '$1000', budget: '$1500' },
        { id: 2, title: 'è¿™æ˜¯2', publishTime: '2024-05-20', biddersCount: 2, averageBid: '$1200', budget: '$2000' },
        { id: 3, title: 'è¿™é¦–3', publishTime: '2024-05-19', biddersCount: 1, averageBid: '$900', budget: '$1800' }
      ]
    };
  },
  methods: {
    manageBidders(taskId) {
      // ç®¡ç†ç«æ ‡è€…
      console.log('?????????????ID??', taskId);
    },
    editTask(taskId) {
      // ä¿®æ”¹ä»»åŠ¡
      console.log('???????????ID??', taskId);
    },
    deleteTask(taskId) {
      // åˆ é™¤ä»»åŠ¡
      console.log('???????????ID??', taskId);
    },
    browseBidders(tsakId){
      //æµè§ˆé›‡å‘˜ä¿¡æ¯
      console.log("ä»»åŠ¡id",taskId)
    }
  }
};
</script>

<style>
/* ????????????????????? */
</style>
>>>>>>> master
