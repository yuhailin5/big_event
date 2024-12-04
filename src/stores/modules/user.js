import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (val) => {
      token.value = val
    }
    const delToken = () => {
      token.value = ''
    }

    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data.data
    }

    const setUser = (val) => {
      user.value = val
    }
    return {
      token,
      setToken,
      delToken,
      user,
      getUser,
      setUser,
    }
  },
  {
    persist: true, //自动持久化数据
  },
)
