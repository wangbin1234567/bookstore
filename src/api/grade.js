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
  export function deleteGrade(id) {
    return request({
      url: `/manger/grade/delete`,
      method: 'delete',
      data: {grade_id: id}
    })
  }