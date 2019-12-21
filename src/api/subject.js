import request from '@/utils/request'

export function getSubject() {
    return request({
      url: '/exam/subject',
      method: 'get'
    })
  }