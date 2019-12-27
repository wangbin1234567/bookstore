import request from '@/utils/request'
import data from '@/views/pdf/content'

export function getRoom() {
    return request({
      url: '/manger/room',
      method: 'get'
    })
  }
  export function createRoom(data) {
    return request({
      url: '/manger/room',
      method: 'post',
      data
    })
  }
  export function deleteRoom(id) {
    return request({
      url: `/manger/room/delete`,
      method: 'delete',
      data: {room_id: id}
    })
  }