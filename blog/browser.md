<!--
 * @Author: your name
 * @Date: 2021-11-21 10:15:52
 * @LastEditTime: 2021-11-21 18:11:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \workspaces\plugins\blog\browser.md
-->
## 谈谈浏览器
[正确使用浏览器，瞬间提高效率](https://www.bilibili.com/video/BV1ov411Y7KS/?spm_id_from=333.788.recommend_more_video.1#:~:text=%E7%99%BE%E5%88%86%E3%80%81Yandex%E3%80%81Vivaldi,%E7%89%99%5D%5B%E5%91%B2%E7%89%99%5D)

`chrome`现在最流行，但是不翻墙的话，`同步`和上chrome web store找插件成问题

`百分`、`Yandex`、`Vivaldi`和`Brave`。这四个都是谷歌内核浏览器[呲牙][呲牙]

### 统一搜索技巧
1. 地址栏默认用gogole或者百度，可以在`设置`-`搜索引擎`里修改
2. 在`设置`-`搜索引擎`-`管理搜素引擎`里找到或者修改引擎的`关键字`,在地址栏里面先敲入`关键字` 然后再敲入`tab或者空格`，就可以使用对应的搜索引擎了

### 搜索技巧

[你真的会用搜索引擎吗？转发！99%的人都不知道的高效搜索引擎使用技巧](https://www.bilibili.com/video/BV1w54y1q7uf?from=search&seid=6563408024093736852&spm_id_from=333.337.0.0#:~:text=1.%20%E5%87%86%E7%A1%AE%E6%90%9C%E7%B4%A2,site%3Astanford.edu%20filetype%3Apdf)

1. `准确搜索`：给关键词加上`英文双引号` eg: “人工智能算法”
2. `排除关键词`：在搜索内容后面加上空格减号`-`需要排除的关键词 eg: 苹果 -iPhone -iPad
3. `用OR逻辑搜索`：用大写的`OR`和空格隔开关键词 eg: 百度 OR 谷歌,主要是
4. `模糊搜索`：用`*`代替文字或单词 eg: study * home
5. `filetype`：在关键词后加上filetype:文件类型 eg: 高等数学 filetype:pdf
6. `site`：在关键词后加上site:指定的网站 eg: 后浪 site:bilibili.com
7. `inurl/allinurl`：在关键词后加上`inurl`:需要筛选的url关键字，`allinurl`必须同时包含关键词 eg: 肖生克的救赎 inurl:movie film
8. `intitle/allintitle`：在关键词后加上intitle:需要筛选的title关键字，allintitle必须同时包含关键词 eg: machine learning intitle:stanford mit
9. `define`：通过define:关键词得到准确定义 eg: define:internet
10. 组合示例：machine learning -vision -drive site:stanford.edu filetype:pdf




一般的设置如下：

| 搜索引擎 | 关键字 | 查询网址 |
 | :----- | :-----  | :---- |
  | 百度 | baidu.com 或者 :b| https://www.baidu.com/s?ie={inputEncoding}&wd=%s&bn=centbrowser |
   | Google | google.com 或者 :g | `{google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding} `或者`{google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:prefetchSource}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding} `|
| Bing | bing.com 或者 :bing| https://www.bing.com/search?q=%s&PC=U316&FORM=CHROMN |
| 搜狗 | sogou.com 或者 :s| https://www.sogou.com/web?ie={inputEncoding}&query=%s |
| 360 | so.com 或者 :so| https://www.so.com/s?ie={inputEncoding}&q=%s |




- `百分` 
### 优点
1. 起始页可以切换`多个搜索引擎`，可以切换背景图片，可以自定义多个站点的快捷键
2. 工具栏 自带 恢复`关闭标签`、`书签管理` 下载管理 截图
3. 右键可以添加书签

### 缺点
1. 自带下载管理和截图功能有点弱(这不是大问题)
2. 根据谷歌的新政策，百分在几个月后似乎就不能再使用谷歌账号来同步数据了(迄今为止(2021-11-21) 还可以)

- `brave` 
### 优点
1. 右下角 可以进入设置、书签管理、历史记录，并且它们可以在同一页面切换管理


### 缺点
1. 自带下载管理、历史记录功能比较弱，工具栏没有好用的快捷键

- `Yandex` 
### 优点
1. `左上角悬停`显示书签、历史记录，工具栏显示设置、下载
2. 起始页背景可以设置动态视频，下面显示`书签和历史记录`
3. `地址栏可以显示起始页`，有`复制`和分享按钮
4. 后台 设置、下载、历史记录、书签、扩展插件等都在同一个页面


### 缺点
1. 自带下载管理、历史记录功能比较弱，工具栏没有好用的快捷键
2. 地址栏无法选择其他搜索引擎，只能固定某一个

- `vivaldi` 
### 优点
1. 地址栏在输入时`显示书签和历史记录`，右边有`翻译、书签、历史记录`，工具栏还有`切换多个搜索`的快捷输入框
2. 书签栏可以加分割线，直接建立文件夹，可以按照不同的方法排序
3. 侧边栏可以显示`书签、下载、历史记录、笔记`，可以使用`ctrl+shift+c`复制文本到笔记，可以同步笔记
4. 左下角显示设置、休息，右下角显示截图



### 缺点
1. 很多功能被简化了


- `vivaldi` 
### 优点
1. 可以不翻墙的情况下同步，本身有自己的插件商店，也可以是使用chrome web store
2. 大声朗读，方便学习外语
3. 有阅读模式
4. 工具栏有下载 收藏夹 历史记录 扩展管理 截图 集锦等快捷键
5. 集锦功能使用，可以随时记住有用信息，减少收藏夹的臃肿。
6. 地址栏在输入时`显示书签和历史记录`，


### 缺点
1. 



### 常用插件

| 名称 | 功能 | 查询网址 |
 | :----- | :-----  | :---- |
 | infinity | 起始页 |  |
| Tampermonkey | 在greasyfork.org使用ac-baidu去掉百度广告 |  |
| ublock origin | 过滤广告 | AdGuard或者Adblock Plus或者Adblock也可以 |
| 简悦 | 使网页进入阅读模式，并且可以导出 |  |
| IDM（Internet Download Manager） | 下载管理 可以按分类下载，除了磁力（用迅雷补充），其他都可以下载 |(收费的)网上有破解版  |
| UDM（Neat Download Manager） | 下载管理  |不收费  |
| 集装箱 | 过滤掉高速下载陷阱 |  |
| 浮图秀 | 悬停看大图 |  |
| 沙拉查词 | 查询英语单词，可加入生词表 |  |
| Global Speed | 可倍速片头广告 |  |
| imageAssistant | 批量图片下载 |  |
| fireshot | 网页截图 |  |
| 暴力猴 | 比油猴更方便、可以直接搜索当前网页脚本 |  |
|  |  |  |
|  |  |  |
|  |  |  |



