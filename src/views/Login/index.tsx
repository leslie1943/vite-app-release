import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import './login.scss'

const Login = defineComponent({
  setup() {
    // 路由需要全局声明
    const router = useRouter()
    // 定义 data 数据
    const count = ref(0)
    const username = ref('admin')
    const password = ref('123456')

    const onLogin = () => {
      // router.push('/')
      router.push({ path: '/' })
    }

    return () => (
      <>
        <div class="login-bg">
          <div class="login-form">
            <div class="title">{count.value}</div>
            <el-form>
              <el-form-item>
                <el-input
                  prefix-icon="el-icon-user-solid"
                  placeholder="请输入账号"
                  v-model={username.value}
                />
              </el-form-item>
              <el-form-item>
                <el-input
                  prefix-icon="el-icon-lock"
                  placeholder="请输入密码"
                  v-model={password.value}
                  show-password
                />
              </el-form-item>
              <el-form-item>
                <el-row gutter={2}>
                  <el-col span={12}>
                    <el-button
                      class="login-btn"
                      type="success"
                      onClick={onLogin}
                    >
                      登录
                    </el-button>
                  </el-col>
                  <el-col span={12}>
                    <el-button
                      class="login-btn"
                      type="primary"
                      onClick={() => count.value--}
                    >
                      注册
                    </el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </>
    )
  },
})
export default Login
