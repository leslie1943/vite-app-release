import { defineComponent, ref } from 'vue'
import './login.scss'

const App = defineComponent({
  setup() {
    const count = ref(0)
    const username = ref('')
    const password = ref('')

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
                      onClick={() => count.value++}
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
export default App
