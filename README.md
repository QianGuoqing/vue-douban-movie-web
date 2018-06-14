## Vue 豆瓣电影

**介绍**

使用Vue技术栈开发SPA豆瓣电影

**技术栈**

- vue
- vue-router
- vuex
- vue-antd-ui
- axios
- stylus
- vue-lazyload

**使用**

- git clone 项目
- npm install
- npm run dev
- 在网页中输入 localhost:8080

**实现功能**

- 电影主页：包括大标题、搜索电影框、正在热映和最近热门电影的轮播栏、本周口碑榜 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/home-index.gif) [点击查看详情2](http://47.98.159.8/picture-repo/vue-douban-movie/home-index2.gif)


- 影讯购票页面：包括正在上映的电影和即将上映的电影展示，移到每个电影item上显示电影的简介信息popup框 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/xingxun-goupiao.gif)

- 正在上映页面：正在上映电影的全部展示 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/zhengzaishangying.gif)

- 即将上映页面：即将上映电影的全部展示 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/jijiangshangying.gif)

- 排行榜页面：包括新片排行榜列表、本周口碑榜、北美票房榜、豆瓣Top250电影榜 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/paihangbang.gif)

- 电影分类页面：将电影分类成各个tag，当点击tag的时候，渲染出对应类别的电影。当点击加载更多后，可以获取并渲染更多的电影 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/dianyingfenlei.gif)

- 电影Top250页面：用于显示Top250的电影列表，并以分页的形式加载数据 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/top250.gif)

- 电影详情页：包括电影的详细信息、评分、导演演员列表、电影图片列表、短评列表、影评列表。点击每个电影子项都会跳转到该页面以显示详细信息 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/dianyingxiangqing.gif)

- 影人详情页：点击电影的导演、编剧、演员等跳转至其对应的影人详情页，包括影人的基本信息、简介、作品等内容。点击影人的作品，跳转至作品（电影）的详情页 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/yingrenxiangqing.gif)

- 短评列表页：以列表的形式显示给定电影的短评，每页20条，以分页的形式加载所有评论。在该页面的侧边栏显示该电影的概要信息，点击后可以跳转到该电影的详情页 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/duanpingliebiao.gif)

- 长评列表页：以列表的形式显示给定电影的短评，每页20条，以分页的形式加载所有评论。在该页面的侧边栏显示该电影的概要信息，点击后可以跳转到该电影的详情页 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/changpingliebiao.gif)

- 搜索电影功能：在输入框内搜索你想要的内容，会显示出搜索结果列表，选择其中一项后，可以跳转到详情页。用vuex控制 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/sousuodianying.gif)

- 个人中心：用户可以注册，登陆，并满足一些基本的登录注册判断。注册登陆成功后，在页面右上角显示登陆状态。在登录成功状态下可以选择登出。用vuex控制 [点击查看详情](http://47.98.159.8/picture-repo/vue-douban-movie/gerenzhongxin.gif)


**其他细节**

- 一些动画效果使得UI友好
- 数据加载的loading效果
- 图片懒加载
- 回到顶部
- 加载更多
- 分页加载