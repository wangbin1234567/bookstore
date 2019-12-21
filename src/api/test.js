import request from '@/utils/request'
export function testManagement() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET'
  })
}
export function testGenre() {
  return request({
    url: '/exam/examType',
    method: 'GET'
  })
}
export function testSubject() {
  return request({
    url: '/exam/subject',
    method: 'GET'
  })
}
