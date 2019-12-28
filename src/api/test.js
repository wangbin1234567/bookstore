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
export function addTestPort(data) {
  return request({
    url: '/exam/questions',
    method: 'post',
    data
  })
}
export function addQuestionsType() {
  return request({
    url: '/exam/insertQuestionsType',
    method: 'GET'
  })
}
export function testCondition() {
  return request({
    url: '/exam/questions/condition'
  })
}
export function testInquire(params) {
  return request({
    url: '/exam/questions/condition',
    method: 'GET',
    params
  })
}
export function addNewExam() {
  return request({
    url: '/exam/questions/new',
    method: 'GET'
  })
}
export function questionsUpdate(data) {
  return request({
    url: '/exam/questions/update',
    method: 'PUT',
    data
  })
}
