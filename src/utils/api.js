import request from './request'
// import Bmob from './Bmob-1.4.1.min.js'
// import Bmob from './Bmob-1.3.0.min.js'
import Bmob from 'hydrogen-js-sdk'
// import Bmob from './Bmob-1.4.1.min.js'
Bmob.initialize('9b41c92db4976a1bae59d554f0c3fc4a', '7fa2bb3451025d9da1f234e700ea161a')
const baseUrlApi = 'https://api.ithome.com'
const baseUrlDyn = 'https://dyn.ithome.com'
const baseUrlQuan = 'https://apiquan.ithome.com'

const api = {
  getNewsList: (r) => {
    return new Promise((resolve, reject) => {
      const query = Bmob.Query('newslist')
      query.find().then(res => {
        resolve({ 'newslist': res })
      }).catch(err => {
        reject(err)
      })
    })
  },

  getNews: (id) => {
    if (!id) return
    return new Promise((resolve, reject) => {
      const query = Bmob.Query('newscontent')
      query.get(id).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getRelatedNews: (id) => {
    return new Promise((resolve, reject) => {
      const query = Bmob.Query('newslist')
      // query.equalTo('related', '==', '1')
      query.limit(5)
      query.find().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getNewsComments: (id) => request.get(`/json/commentlist/350/87a8e5b144d81938.json`, null, {
    baseURL: baseUrlDyn
  }),
  getSlides: () => {
    return new Promise((resolve, reject) => {
      const query = Bmob.Query('slides')
      query.find().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getTopics: (r) => request.get('/api/post', {
    categoryid: 0,
    type: 0,
    orderTime: r,
    visistCount: '',
    pageLength: ''
  }, {
      baseURL: baseUrlQuan
    }),
  getTopic: (id) => request.get(`/api/post/${id}`, null, {
    baseURL: baseUrlQuan
  }),
  getTopicComments: (id, last) => request.get('/api/reply', {
    postid: id,
    replyidlessthan: last
  }, {
      baseURL: baseUrlQuan
    })
}

export default api
