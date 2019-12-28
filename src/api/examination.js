import request from '@/utils/request'
export function CreateExam(payload) {
  return request({
    url: '/exam/exam',
    method: 'post',
    data: payload
  })
}
export function getExam() {
  return request({
    url: '/exam/exam',
    method: 'get'
  })
}
export function getExamType() {
  return request({
    url: '/exam/examType',
    method: 'get'
  })
}
export function getSubject() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}
export function getW5tcy() {
  return request({
    url: '/exam/exam/w5tcy-g2dts',
    method: 'get'
  })
}
export function delG2dts() {
  return request({
    url: '/exam/exam/w5tcy-g2dts',
    method: 'delete'
  })
}

