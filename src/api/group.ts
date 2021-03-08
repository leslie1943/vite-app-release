// /groups/:id/subgroups

import request from '../util/request'

const getGroups = async () => {
  return await request('/api/v4/groups', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'PRIVATE-TOKEN': 'DhpUBsnfVjswWpAZehV4',
    },
  })
}

export default {
  getGroups,
}
