import request from '@/utils/request'

export function getStudentPage(id) {
    return request({
      url: `/exam/student/:${id}`,
      method: 'get'
    })
  }