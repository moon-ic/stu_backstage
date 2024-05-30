<template>
  <div class="login-bg">
    <div class="login-container">
      <div class="login-header">
        <img class="logo mr10" src="../../assets/img/logo.svg" alt="" />
        <div class="login-title">学生任务发布系统</div>
      </div>
      <el-form :model="param" :rules="rules" ref="login" size="large">
        <el-form-item prop="status">
          <el-input v-model="param.status" placeholder="身份">
            <template #prepend>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="用户名">
            <template #prepend>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              type="password"
              placeholder="密码"
              v-model="param.password"
              @keyup.enter="submitForm(login, param)"
          >
            <template #prepend>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" size="large" @click="submitForm(login, param)">登录</el-button>
        <p class="login-text">
          没有账号？<el-link type="primary" @click="$router.push('/register')">立即注册</el-link>
        </p>
      </el-form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useTabsStore } from '@/store/tabs';
import { usePermissStore } from '@/store/permiss';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import {login_admin, login_performer, login_publisher} from '@/api';

interface LoginInfo {
  username: string;
  password: string;
  status: string;
}

const lgStr = localStorage.getItem('login-param');
const defParam = lgStr ? JSON.parse(lgStr) : null;
const checked = ref(lgStr ? true : false);

const router = useRouter();
const param = reactive<LoginInfo>({
  username: defParam ? defParam.username : '',
  password: defParam ? defParam.password : '',
  status: defParam ? defParam.status : '',
});

const rules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入您的用户名',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, message: '请输入您的密码', trigger: 'blur' }],
  status: [
    {
      required: true,
      message: '请按照身份填入数字：0（管理员），1（发布者），2（执行者）',
      trigger: 'blur',
    },
  ],
};

const permiss = usePermissStore();
const login = ref<FormInstance>();

const submitForm = (formEl: FormInstance | undefined, param: { username: string, status:string, password: string }) => {
  if (!formEl) return;
  formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
        let res;
        switch (param.status) {
          case '0':
            // 管理员登录


          case '1':
            //发布者登录
            res = await login_publisher(param.username, param.password);
            console.log(res.data)
            localStorage.setItem('publisher-id', res.data.data);
            localStorage.setItem('user_status',"1");
            ElMessage.success('登录成功');
            const keys1 = permiss.defaultList['publisher'];
            permiss.handleSet(keys1);
            await router.push('/dashboard1');
            break;
          case '2':
            // 执行者登录
            res = await login_performer(param.username, param.password);
            console.log(res.data)
            localStorage.setItem('performer-id', res.data.data);
            localStorage.setItem('user_status',"2");
            ElMessage.success('登录成功');
            const keys2 = permiss.defaultList['performer'];
            permiss.handleSet(keys2);
            await router.push('/dashboard2');
            break;
          default:
            throw new Error('Invalid status');
        }
      } catch (error) {
        ElMessage.error('登录失败');
      }
    } else {
      ElMessage.error('登录失败');
      return false;
    }
  });
};

const tabs = useTabsStore();
tabs.clearTabs();
</script>

<style scoped>
.login-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url(../../assets/img/login-bg.jpg) center/cover no-repeat;
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.logo {
  width: 35px;
}

.login-title {
  font-size: 22px;
  color: #333;
  font-weight: bold;
}

.login-container {
  width: 450px;
  border-radius: 5px;
  background: #fff;
  padding: 40px 50px 50px;
  box-sizing: border-box;
}

.pwd-tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: -10px 0 10px;
  color: #787878;
}

.pwd-checkbox {
  height: auto;
}

.login-btn {
  display: block;
  width: 100%;
}

.login-tips {
  font-size: 12px;
  color: #999;
}

.login-text {
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  color: #787878;
}
</style>