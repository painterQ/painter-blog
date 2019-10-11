# painter-blog

## Project setup
```
初始化 ：vue create --default .
    通过命令行可以指定预设presets

启动： npm run serve --scripts-prepend-node-path=auto

cli-plugin-bable 
    可以通过配置文件babel.config.js修改
vue-cli-service 
    使用命令 vue-cli-service lint 
    可以通过.eslintrc或者package.json的eslintConfig域配置
    可以通过vue add eslint安装
package.json
    npm的配置文件，记录了了依赖

Babel
    一个js编译器，实现语法转换等
webpackage
    一个打包工具，
    vue.config.js 可以配置vue项目
        https://github.com/vuejs/vue-cli/tree/dev/docs/config
        指定打包后的输出目录
        保存时是否使用eslint-loader 来格式化
        webpack配置
        vue-loader的配置
        css-loader的配置
        webpack dev server相关的配置，例如端口等
        ...
    主要是：@vue/cli-service 依赖 webpack
    
配置一个vue3.0项目
    https://blog.csdn.net/moonbc/article/details/89549154

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### WebPack
入门文档：
https://www.webpackjs.com/guides/
```
npm init -y
npm install webpack webpack-cli --save-dev
注意修改package.json 增加+   "private": true,，以免意外发布代码
配置文件是webpack.config.js
    配置文件中可以指明enrty，和输出文件的名称（一般进入点称为main.js,输出称为bundle.js）
    指定dist的路径
    一般默认在package.js中指定"build": "webpack",这样npm run build就可以了
    
传统不使用打包工具的话，存在如下问题：
    不能直观看出依赖关系
    脚本引入的顺序有要求，容易出错
    可能导致浏览器下载无用代码

分出/src目录和/dist目录
安装包，只需要使用
    npm install --save name
    npm install --save-dev name

模块化后，使用import...from导入，这样明确依赖关系
不需要再index.html中增加一堆的<script>标签引入依赖，只需要引入根上的一个js即可
这个js就是打包的结果，一般命名为main.js

另外除了打包，webpack还会对代码进行压缩，使用loader系统进行转义处理，比如babel

```
可以加载css loader
```
npm install --save-dev style-loader css-loader
这样在webpack.config.js中会多出一个rules。
其中指定了对哪些文件（正则匹配文件名）使用哪些loader，比如这里使用style-loader和css-loader

在main.js中指定import相应的css文件，然后就会加到最后的bundle.js中
```
加载图片
```
npm install --save-dev file-loader
使用import Icon from './icon.png';导入图片，这个Icon实际是一个转化后的url
file-loader 和 url-loader 可以接收并加载任何文件，包括字体（使用@font-face导入）

还有 csv-loader 和 xml-loader ，直接得到解析好的json
```

### @vue/cli
当前目录自动推导入口文件——入口可以是 main.js、index.js、App.vue 或 app.vue 中的一个

### promise语法
1.解决回调地狱（Callback Hell）问题，使得多层嵌套回调变的扁平，称为类似链式调用的形式
不断的调用promise对象的then方法来完成回调的嵌套（前一个方法要返回需要回调的函数）

2. 方便在上述场景下捕获异常
