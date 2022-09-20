- `npm,node.js`查看版本

~~~cmd
node -v
npm -v
~~~

- `vue cli` --安装/卸载

~~~cmd
npm install -g @vue/cli
npm uninstall -g @vue/cli
~~~

- 查看`vue`版本 

~~~cmd
vue -V
~~~

- `vue`创建项目

~~~cmd
vue create project-demo
>Manually select features
Babel, Router, Vuex

2.x

In package.json

~~~

- `router`,`index.js`--路由

~~~js
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
~~~

- `component`静态导入

~~~js
import HomeView from '../views/HomeView.vue'
~~~

- `component`动态导入

~~~js
component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
~~~

- `[node_modules]` `Project setup`执行如下命令生成

~~~cmd
npm install
~~~

- `[public]` 静态资源文件夹`css`,`js`,`img`此文件夹为根路径;`public/favicon.ico`
- `[src/assets]`资源文件夹,此处文件夹,应该是不随程序运行而发生变化的,如`logo.png`
- `[src/components]`组件文件夹

~~~cmd
<template>
<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
~~~

- `[src/router]`,配置路由,`index.js`---默认文件
- `[src/store]`,`[index.js]`,默认配置全局共享变量文件
- `[views]`,一般视图组件所在文件夹
- `[src/App.vue]`默认绑定`[index.html]`页面的`<div id="app"></div>`
- `src/main.js`：此项目的主配置文件，通常，在项目中安装了软件之后，都需要在此文件中补充配置
- `package.json`：项目的配置文件，例如配置了此项目的依赖项等
- `package-lock.json`：锁定的配置文件，不需要，也不建议手动修改此文件中的任何内容

# - 安装`elementUI`

~~~cmd
npm i element-ui -S
~~~

安装完成后，需要在`src/main.js`中添加配置：

```javascript
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

`package.json`

~~~json
  "dependencies": {
    "element-ui": "^2.15.10",
  },
~~~

- # 安装 `axios`

~~~cmd
npm i axios -S
~~~















