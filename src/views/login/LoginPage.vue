<template>
    <div class="login-container">
        <el-card class="login-card" shadow="hover">
            <h1 class="title"><span>控</span><span>制</span><span>台</span></h1>
            <el-form
                :model="userForm"
                :rules="rules"
                ref="ruleFormRef"
                label-width="auto"
                autocomplete="off"
                class="login-form"
            >
                <el-form-item label="邮箱" prop="email">
                    <el-input
                        v-model="userForm.email"
                        :prefix-icon="UserIcon"
                        type="email"
                        placeholder="请输入邮箱"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        v-model="userForm.password"
                        :prefix-icon="Lock"
                        type="password"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="repassword">
                    <el-input
                        v-model="userForm.repassword"
                        :prefix-icon="Lock"
                        type="password"
                        placeholder="请输入再次密码"
                    ></el-input>
                </el-form-item>
                <el-form-item class="form_bottom">
                    <el-button @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/type'
import type { FormInstance, FormRules } from 'element-plus'
import { ref, watch } from 'vue'
import { userLoginService } from '@/api/user'
import { useBlogStore } from '@/stores'
import { useRouter } from 'vue-router'
import { User as UserIcon, Lock } from '@element-plus/icons-vue'

const router = useRouter()
const blogStore = useBlogStore()

// 表单引用
const ruleFormRef = ref<FormInstance>()
// 校验规则
const rules: FormRules = {
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        {
            min: 5,
            max: 20,
            message: '邮箱必须是5-20位的字符',
            trigger: 'blur',
        },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
            pattern: /^\S{4,15}$/,
            message: '密码必须是4-15位的非空字符',
            trigger: 'blur',
        },
    ],
    repassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        {
            pattern: /^\S{4,15}$/,
            message: '密码必须是4-15的非空字符',
            trigger: 'blur',
        },
        {
            validator: (
                rule,
                value: string,
                callback: (error?: Error) => void,
            ) => {
                if (value !== userForm.value.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            },
            trigger: 'blur',
        },
    ],
}

const userForm = ref<User>({} as User)

const login = async () => {
    if (!ruleFormRef.value) return
    await ruleFormRef.value.validate()
    const res = await userLoginService(userForm.value)
    console.log(res.data)
    blogStore.setToken(res.data.token)
    isLogin.value = true
    ElMessage.success('登录成功')
    router.push('/user')
}

const isLogin = ref(false)

// 切换清空表单
watch(isLogin, () => {
    userForm.value = {
        email: '',
        password: '',
        repassword: '',
    }
})
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.login-card {
    background: transparent;
    backdrop-filter: blur(15px);
    min-width: 400px;
    padding: 20px 0px 0px 0px;
    border-radius: 30px;
    box-shadow: 0 5px 15px #00000050;
    border: 1px solid #96969650;
    color: white !important;
    text-align: center;
    h1 {
        font-family: 'ZCOOLXiaoWei-Regular';
        font-size: 40px;
        margin-bottom: 20px;
    }
    .title span {
        letter-spacing: 10px;
    }
    .title span:last-child {
        letter-spacing: 0;
    }
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form_bottom {
    position: relative;
    top: 10px;
}
:deep(.el-input__wrapper) {
    background-color: transparent;
    --el-button-border-color: white;
}
:deep(.el-input__inner) {
    color: #d8e1f3;
}
:deep(.el-button) {
    background-color: transparent;
    --el-button-text-color: #c4cddf;
    --el-button-hover-text-color: #dde4f3;
    border-color: #ffffff63;
}
:deep(.el-form-item__label) {
    color: #abcfd9;
}
</style>
