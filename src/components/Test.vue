<template>
    <h1>Test Page</h1>
    <div class="container">
    <div class="row">
        <div class="col-md-4 bg-primary">这是一个蓝色背景的列</div>
        <div class="col-md-8 bg-success">这是一个绿色背景的列</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 bg-warning">在大屏幕上占据整个宽度，黄色背景</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 bg-danger">第一列，红色背景</div>
        <div class="col-md-6 offset-md-2 bg-info">第二列，偏移两列，蓝色背景</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestPage',
  };
  </script>