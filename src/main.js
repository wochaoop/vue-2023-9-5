import { createApp } from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import router from './router'; // 导入路由配置文件
import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式
import 'bootstrap/dist/js/bootstrap.min.js' //引用bootstrap的js

const app = createApp(App);

app.use(Router);
app.use(router); // 使用路由器

app.mount('#app');
