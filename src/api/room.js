import request from '@/utils/request'

export function getRoom() {
    return request({
      url: '/manger/room',
      method: 'get'
    })
  }