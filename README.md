#### 知乎图片爬虫

&emsp;&emsp;迫于想要批量下载某知乎回答下的背景图，写了这个小工具。

#### 使用

```bash
#克隆仓库
git clone git@github.com:LuhangRui/zhihu-spider-node.git
#安装依赖
npm install
#使用
npm run crawl
#或者
node index.js

```
#### 示例

```
#example
dell@DESKTOP-8U4HTOL MINGW64 /d/study/zhihu-spider-node
$ npm run crawl
? 请输入要爬取的知乎链接: https://www.zhihu.com/question/343618796
开始收集地址
https://pic1.zhimg.com/v2-fc786fb855377959c5709c5c0f5450f9_r.jpg
https://pic4.zhimg.com/v2-2e27920b1a3bda51c8514abf8fa28fac_r.jpg
https://pic3.zhimg.com/v2-26d75421a1aeda50d9514df71b3a9935_r.jpg
https://pic3.zhimg.com/v2-90d6607558e215b56d1447b803530e4f_r.jpg
https://pic4.zhimg.com/v2-af2189bc85ba629120f5e54397b07961_r.jpg
https://pic4.zhimg.com/v2-0253758fb2ce684fb201d4fe3461407d_r.jpg
https://pic1.zhimg.com/v2-0ac3c5c7f4370a977067d1074502822e_r.jpg
https://pic4.zhimg.com/v2-4bf7710ffcb77506082236203abd39ba_r.jpg
https://pic2.zhimg.com/v2-ffa4c1cc5e4a109d59fee858bc8ca7b7_r.jpg
https://pic3.zhimg.com/v2-a1b98d55284af9a4494c05997d4ebc0e_r.jpg
共10张图片，开始下载
正在下载./download/zhihu-spider-1-2019-12-06.jpg
正在下载./download/zhihu-spider-2-2019-12-06.jpg
正在下载./download/zhihu-spider-6-2019-12-06.jpg
正在下载./download/zhihu-spider-7-2019-12-06.jpg
正在下载./download/zhihu-spider-0-2019-12-06.jpg
正在下载./download/zhihu-spider-5-2019-12-06.jpg
正在下载./download/zhihu-spider-9-2019-12-06.jpg
正在下载./download/zhihu-spider-3-2019-12-06.jpg
正在下载./download/zhihu-spider-4-2019-12-06.jpg
正在下载./download/zhihu-spider-8-2019-12-06.jpg
```

#### 版权声明

原回答者版权所有，不要滥用工具。
