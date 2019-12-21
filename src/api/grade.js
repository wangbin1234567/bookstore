import request from '@/utils/request'

export function getGrade() {
    return request({
      url: '/manger/grade',
      method: 'get'
    })
  }
  export function createGrade(data) {
    return request({
      url: '/manger/grade',
      method: 'post',
      data
    })
  }
  export function updateGrade(data) {
    return request({
      url: '/manger/grade/update',
      method: 'put',
      data
    })
  }
  export function deleteGrade(grade_id) {
    return request({
      url: `//manger/grade/delete/${grade_id}`,
      method: 'delete'
    })
  }