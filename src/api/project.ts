import request from '../util/request'

const getProjects = async () => {
  return await request('/api/v4/groups/98/projects?per_page=200', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'PRIVATE-TOKEN': 'DhpUBsnfVjswWpAZehV4',
    },
  })
}

export default {
  getProjects,
}
