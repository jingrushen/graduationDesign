import wepy from 'wepy'
import config from '@/config/Config'


/**
 * @param {Object} options 请求配置 url method header data
 * @return {Promise}
 */
function request (options) {
  // 提取配置请求
  const { url, method, header, data } = options
  let URL;

  URL = url.indexOf('http') > -1 ? url : config.host + url
  
  // 基本请求的配置
  let reqObj = {
    url: URL,
    method: method.toUpperCase(),
    header: {
      "Content-Type": "text"
    },
    data: {
      // apikey: '0b2bdeda43b5688921839c8ecb20399b'
    }
  }

  if(header) {
    reqObj.header = Object.assign({}, reqObj.header, header);
  }

  if(data) {
    reqObj.data = Object.assign({}, reqObj.data, data);
  }


  return new Promise((resolve, reject) => {
    wepy.request(reqObj).then((response) => {
      let { data, statusCode } = response
      if(statusCode === 200) {
        resolve(data);
      } else {
        wepy.showToast({
          title: '出错了',
          icon: 'none',
          duration: 1500
        })
      }
    }).catch((err) => {
      reject(err)
    })
    
  })
}

/**
 * GET请求
 * 
 * @param {String} url 请求地址
 * @param {Object} data 请求数据
 */
function get(url, data, header) {
  let params = { url, data, header }
  params.method = 'GET'
  return request(params)
}

module.exports = {
  request,
  get,
  // post,
  // put
}