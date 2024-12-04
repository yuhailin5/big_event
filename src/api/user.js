import request from '@/utils/request'

// 注册接口
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/user/reg', { username, password, repassword })

//登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/login', { username, password })

//获取用户信息
export const userGetInfoService = () => request.get('/my/userinfo')
