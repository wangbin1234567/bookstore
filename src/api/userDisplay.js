import request from '@/utils/request'

export function userLister(){
    return request({
        url:"/user/user",
        method:"get"
    })
}

export function identity(){
    return request({
        url:"/user/identity",
        method:"get"
    })
}

export function api_identity(){
    return request({
        url:"/user/api_authority",
        method:"get"
    })
}

export function relation(){
    return request({
        url:"/user/identity_api_authority_relation",
        method:"get"
    })
}

export function authority(){
    return request({
        url:"/user/view_authority",
        method:"get"
    })
}

export function view_authority(){
    return request({
        url:"/user/identity_view_authority_relation",
        method:"get"
    })
}

export function User_id(data){
    return request({
        url:"/user/user",
        method: "put",
        data
    })
}