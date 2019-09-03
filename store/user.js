// 用户管理/存储信息
export const state = () => {
    return  {
        userInfo:{
            token: "",
            user: {},
        }

    }
}
export const mutations={
    setUserInfo(state,data){
        state.userInfo = data
    }
}
export const actions={

}