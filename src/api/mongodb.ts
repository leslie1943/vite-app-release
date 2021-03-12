import request from '../util/request'

export const getArticles = async () => {
  return await request('/sz/articles', {
    method: 'GET',
  })
}

export default {
  getArticles,
}
