import request from '@/utils/request'

export function register(data){
    // console.log(data,'=>>>>>>>>=---');
    return request({
        url:"/user",
        method:"post",
        data
    })
}
export function jurisdiction(){
    return request({
        url:'/user/view_authority',
        method:"get"
    })
}
export function userList(){
    return request({
        url:"/user/identity_api_authority_relation",
        method:"get"
    })
}