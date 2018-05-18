# IT之家小程序修改教程

## 1. 建立数据表

建立表`newslist`，点击导入`/src/db/newslis.json`数据

## 2.引入Bmob

不知道具体原因，引入打包好的压缩版，会报错。这里用源码引入，1.4.1之前，没有提交`axios`到npm包，如果使用这个版本，大家可以自己复制这个包进项目目录

```
npm install hydrogen-js-sdk
```

3.修改列表请求数据

```
//api.js,getNewsList改为
getNewsList: (r) => {
    return new Promise((resolve, reject) => {
      const query = Bmob.Query('newslist')
      query.find().then(res => {
        resolve({'newslist': res})
      }).catch(err => {
        reject(err)
      })
    })
  },
```

4.数据已经从Bmob数据库调用出来了

### 数据API列表

- 新闻列表 <https://api.ithome.com/json/newslist/news?r=0>
- 文章详情 <https://api.ithome.com/xml/newscontent/350/412.xml>
- 相关文章 <https://api.ithome.com/json/tags/0350/350362.json>
- 最热评论 <https://dyn.ithome.com/json/hotcommentlist/350/87a8e5b144d81938.json>
- 评论列表 <https://dyn.ithome.com/json/commentlist/350/87a8e5b144d81938.json>
- 评论详情 <https://dyn.ithome.com/json/commentcontent/d739ee8f2ceb0a27.json>
- 轮播新闻 <https://api.ithome.com/xml/slide/slide.xml>
- 圈子列表 <https://apiquan.ithome.com/api/post?categoryid=0&type=0&orderTime=&visistCount&pageLength>
- 圈子详情 <https://apiquan.ithome.com/api/post/236076>
- 圈子评论 <https://apiquan.ithome.com/api/reply?postid=236076&replyidlessthan=3241294>

