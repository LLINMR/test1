// index.js
Page({
  data:{
    msg:'hello world',
    nickName:'',
    url:'',
    code:''
  },
  getUserInfo(){
    wx.getUserProfile({
      desc: '获取用户信息',
      success: (res) =>{
        console.log(res.userInfo)
        this.setData({
          nickName: res.userInfo.nickName,
          url: res.userInfo.avatarUrl
        })
      }
    })
  },
  wxLogin(){
    wx.login({
      success: (res) => {
        console.log(res.code)
        this.setData ({
          code: res.code
        })
      },
    })
  },
  sendRequest(){
     wx.request({
       url: 'http://localhost:8080/user/shop/status',
       method: 'GET',
       success: (res)=>{
        console.log(res.data)
       }
     })
  }
})
