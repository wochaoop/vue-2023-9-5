<template>
  <div>
    <h1>Test Socket</h1>
    <div class="container">
      <ul>
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'TestSocket',

  data() {
    return {
      messages: [], // 用于存储接收到的消息
    };
  },

  created() {
    // 创建Socket.io客户端连接到后端服务器
    const socket = io('ws://127.0.0.1:6700', { transports: ['websocket'] });

    // 发送鉴权消息
    const authMessage = {
      action: 'get_msg',
      params: {
        access_token: '', // 你的鉴权令牌
      },
    };

    socket.emit('auth', authMessage);

    // 监听来自服务器的消息
    socket.on('message', (message) => {
      // 在messages数组中添加新消息
      this.messages.push(message);
    });
  },
};
</script>
