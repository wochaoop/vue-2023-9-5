<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
    </nav>
  </div>
  </template>
  
  <script>
  export default {
    name: 'IndexPage', // 使用多词组合
  };
  </script>