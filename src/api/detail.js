import request from '@/utils/request'

export function getStudentPage(id) {
    return request({
      url: `/exam/student/?exam_student_id=${id}`,
      method: 'get'
    })
  }