# 安装

### 直接外联

在Html中引入, 它会自动安装

``` html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-tabpanel.js"></script>
``` 

### NPM安装

``` bash
npm install vue-tabpanel
```

如果你是模块化开发，那么你`require`或者`import`后需要通过调用`vue.use()`进行安装

``` js
import Vue from 'vue'
import VueTaber from 'vue-tabpanel'

Vue.use(VueTaber)

```

### 构建开发版

你也可以从github上直接使用最新的开发般，然后直接构建

``` bash
git clone git@github.com:alexqdjay/vue-tabpanel.git node_modules/vue-tabpanel
cd node_modules/vue-tabpanel
npm install
npm run build
```
