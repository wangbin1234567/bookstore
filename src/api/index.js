import request from '@/utils/request'

//添加用户接口
export function register(data){
    // console.log(data,'=>>>>>>>>=---');
    return request({
        url:"/user",
        method:"post",
        data
    })
}
//添加视图接口权限
export function jurisdiction(){
    return request({
        url:'/user/view_authority',
        method:"get"
    })
}
export function jurisdictionAdd(params){
    return request({
        url:'/user/authorityView/edit',
        method:"get",
        params
    })
}
//选择身份id
export function userList(){
    return request({
        url:"/user/identity_api_authority_relation",
        method:"get"
    })
}
//添加身份
export function identity(){
    return request({
        url:"/user/identity/edit",
        method:"get",
        params:{}
    })
}