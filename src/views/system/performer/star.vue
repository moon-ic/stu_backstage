<template>
<<<<<<< HEAD
    <div>
        <div class="container">
            <TableCustom :columns="columns" :tableData="menuData" row-key="index" :has-pagination="false"
                :viewFunc="handleView" :delFunc="handleDelete" :editFunc="handleEdit">
                <template #toolbarBtn>
                    <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true">ĞÂÔö</el-button>
                </template>
                <template #icon="{ rows }">
                    <el-icon>
                        <component :is="rows.icon"></component>
                    </el-icon>
                </template>
            </TableCustom>

        </div>
        <el-dialog :title="isEdit ? '±à¼­' : 'ĞÂÔö'" v-model="visible" width="700px" destroy-on-close
            :close-on-click-modal="false" @close="closeDialog">
            <TableEdit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData">
                <template #parent>
                    <el-cascader v-model="rowData.pid" :options="cascaderOptions" :props="{ checkStrictly: true }"
                        clearable />
                </template>
            </TableEdit>
        </el-dialog>
        <el-dialog title="²é¿´ÏêÇé" v-model="visible1" width="700px" destroy-on-close>
            <TableDetail :data="viewData">
                <template #icon="{ rows }">
                    <el-icon>
                        <component :is="rows.icon"></component>
                    </el-icon>
                </template>
            </TableDetail>
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="system-menu">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { Menus } from '@/types/menu';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import { FormOption } from '@/types/form-option';
import { menuData } from '@/components/menu';

// ±í¸ñÏà¹Ø
let columns = ref([
    { prop: 'title', label: '²Ëµ¥Ãû³Æ', align: 'left' },
    { prop: 'icon', label: 'Í¼±ê' },
    { prop: 'index', label: 'Â·ÓÉÂ·¾¶' },
    { prop: 'permiss', label: 'È¨ÏŞ±êÊ¶' },
    { prop: 'operator', label: '²Ù×÷', width: 250 },
])

const getOptions = (data: any) => {
    return data.map(item => {
        const a: any = {
            label: item.title,
            value: item.id,
        }
        if (item.children) {
            a.children = getOptions(item.children)
        }
        return a
    })
}
const cascaderOptions = ref(getOptions(menuData));


// ĞÂÔö/±à¼­µ¯´°Ïà¹Ø
let options = ref<FormOption>({
    labelWidth: '100px',
    span: 12,
    list: [
        { type: 'input', label: '²Ëµ¥Ãû³Æ', prop: 'title', required: true },
        { type: 'input', label: 'Â·ÓÉÂ·¾¶', prop: 'index', required: true },
        { type: 'input', label: 'Í¼±ê', prop: 'icon' },
        { type: 'input', label: 'È¨ÏŞ±êÊ¶', prop: 'permiss' },
        { type: 'parent', label: '¸¸²Ëµ¥', prop: 'parent' },
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref<any>({});
const handleEdit = (row: Menus) => {
    rowData.value = { ...row };
    isEdit.value = true;
    visible.value = true;
};
const updateData = () => {
    closeDialog();
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
const handleView = (row: Menus) => {
    viewData.value.row = { ...row }
    viewData.value.list = [
        {
            prop: 'id',
            label: '²Ëµ¥ID',
        },
        {
            prop: 'pid',
            label: '¸¸²Ëµ¥ID',
        },
        {
            prop: 'title',
            label: '²Ëµ¥Ãû³Æ',
        },
        {
            prop: 'index',
            label: 'Â·ÓÉÂ·¾¶',
        },
        {
            prop: 'permiss',
            label: 'È¨ÏŞ±êÊ¶',
        },
        {
            prop: 'icon',
            label: 'Í¼±ê',
        },
    ]
    visible1.value = true;
};

// É¾³ıÏà¹Ø
const handleDelete = (row: Menus) => {
    ElMessage.success('É¾³ı³É¹¦');
}
</script>

<style scoped></style>
=======
  <div>
    <h1>æ”¶è—çš„ä»»åŠ¡</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.title }}</span>
        <span>é¢„ç®—: {{ task.budget }}</span>
        <span>å‘å¸ƒæ—¶é—´: {{ task.publishDate }}</span>
        <button @click="unfavoriteTask(task.id)">å–æ¶ˆæ”¶è—</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: 'ä»»åŠ¡ä¸€', budget: '150å…ƒ', publishDate: '2023-05-01' },
        { id: 2, title: 'ä»»åŠ¡äºŒ', budget: '200å…ƒ', publishDate: '2023-05-02' },
        { id: 3, title: 'ä»»åŠ¡ä¸‰', budget: '250å…ƒ', publishDate: '2023-05-03' },
        // ä½ å¯ä»¥æ ¹æ®éœ€è¦æ·»åŠ æ›´å¤šä»»åŠ¡
      ]
    };
  },
  methods: {
    unfavoriteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      // ä½ å¯ä»¥åœ¨è¿™é‡Œæ·»åŠ æ›´å¤šé€»è¾‘ï¼Œæ¯”å¦‚å‘é€è¯·æ±‚åˆ°æœåŠ¡å™¨ä»¥å–æ¶ˆæ”¶è—
      console.log(`å·²å–æ¶ˆæ”¶è—ä»»åŠ¡ ${taskId}`);
    }
  }
};
</script>

<style>
/* ä½ å¯ä»¥æ ¹æ®éœ€è¦æ·»åŠ æ ·å¼ */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

span {
  margin-right: 10px;
}

button {
  margin-left: 10px;
}
</style>
>>>>>>> master
