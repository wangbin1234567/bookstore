import request from '@/utils/request'

export function getStudent() {
    return request({
      url: '/manger/student',
      method: 'get'
    })
  }
  export function deleteStudent(student_id) {
    return request({
      url: `/manger/student/${student_id}`,
      method: 'delete'
    })
  }