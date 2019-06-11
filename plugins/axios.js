export default function (app) {
  let axios = app.$axios; 
 // 基本配置
  axios.defaults.timeout = 10000

  // 请求回调
  axios.onRequest(config => {
    console.log(config.url)
  })

  // 返回回调
  axios.onResponse(res => {
    return res.data
  })

  // 错误回调
  axios.onError(error => {
    // console.log(error)
    const code = parseInt(error.response && error.response.status)

    switch (code) {
      case 404: app.redirect('/404'); break
    }
  })
}