import request from '../util/request'

const getRegions = async () => {
  return await request('/gdszyepro/api/base/getAllRegions', {
    method: 'GET',
    // headers: { Authorization: window.localStorage.getItem('Authorization') },
  })
}

const login = async () => {
  const data = {
    identifier: 'suzhen',
    password: 'yipu1234',
    captchaCode: '',
  }
  return await request('/gdszyepro/auth/login', {
    method: 'post',
    data,
  })
}

export default {
  getRegions,
  login,
}
