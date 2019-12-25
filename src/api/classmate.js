import request from '@/utils/request'

export function getStudentMate(id) {
    return request({
      url: `/exam/student?grade_id=${id}`,
      method: 'get'
    })
  }