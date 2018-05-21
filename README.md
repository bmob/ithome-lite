# ithome 跨平台版本

> 基于mpvue，IT之家小程序版跨平台支持H5、与小程序，随着未来mpvue的升级，可能支持快应用等平台。


## 相关依赖

* [Bmob](https://github.com/bmob/hydrogen-js-sdk) - 后端云服务，无需购买服务器，提供后台数据、文件等服务托管。SDK同时支持浏览器、小程序、Node、Weex 及快应用的基于 Promise 的跨平台请求库
* [mpvue-entry](https://github.com/F-loat/mpvue-entry) - 集中式页面配置，不再需要重复编辑各页面的 main.js 文件
* [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch) - 在 mpvue 中使用 vue-router 兼容的路由写法
* [xmlstring2json](https://github.com/vilien/xmlstring2json) - xml字符串转换 json 格式，适用于微信小程序


## 截图展示
<p>
  <img alt="新闻列表" src="./screenshots/news.jpg" width="33%" />
  <img alt="新闻详情" src="./screenshots/detail.jpg" width="33%" />
  <img alt="圈子列表" src="./screenshots/quanzi.jpg" width="33%" />
</p>


## Tips

* Bmob 使用方法

查询表所有数据

### 查询所有数据

 **简介：**

返回你表的数据列表，默认创建时间排序，默认取100条数据，下面文档可以增加条件。

 **参数说明：**

| 参数      | 类型   | 必填 | 说明           |
| --------- | ------ | ---- | -------------- |
| tableName | string | 是   | 数据表名       |
| res       | string | 是   | 返回的数据集合 |

**请求示例：**

```
const query = Bmob.Query("tableName");
query.find().then(res => {
    console.log(res)
});
```

**返回： **

表中100天条数据，如需分页可以使用skip

* vuex 使用方法

建立 `src/store/index.js` 文件

``` js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  }
})

export default store
```

在 `src/main.js` 中引用

``` js
import Vue from 'vue'
import store from '@/store'
import App from '@/App'

const app = new Vue({
  store,
  ...App
}).$mount()
```

最后在需要使用 vuex 的页面相对应的 `main.js` 文件中像 `src/main.js` 一样引用即可



## 相关资料

1 .Bmob账号密码

> zhongguovu@gmail.com  123456

2.Bmob 数据库操作文档 

> [数据库操作文档](https://github.com/bmob/hydrogen-js-sdk)

## 目前进度

咨询模块

- [x] 首页（广告、列表）
- [x] 详细页面 （文章详细、相关文章）



> 此数据基于Bmob小程序后端数据库，修改后无需备案可直接提交给微信审核。 数据后端云函数支持采集定时更新。

## 相关文章

* [Mpvue 小程序转 Web 实践总结](https://juejin.im/post/5ab84a33f265da239c7b56bd)
*  [IT之家小程序修改教程](./app.md) ./app.md



> 欢迎参与学习移植跨平台应用。