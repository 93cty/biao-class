<template>
  <div>
    <Nav/>
    <div>
      <div class="container">
        <div class="card round filter">
          <div class="col-lg-1 filter-item">分类</div>
          <div class="col-lg-1 filter-item">品种</div>
          <div class="col-lg-1 filter-item">毛色</div>
          <div class="col-lg-1 filter-item">性格</div>
          <div class="col-lg-1 filter-item">性别</div>
          <div class="col-lg-1 filter-item">价格</div>
          <div class="col-lg-1 filter-item">已绝育</div>
          <div class="col-lg-2 filter-item">已接种疫苗</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container row result">
        <div class="col-lg-6">
          <img src="../img/square-1.jpg" class="round">
        </div>
        <div class="col-lg-6">
          <img src="../img/square-1.jpg" class="round">
        </div>
        <div class="col-lg-6">
          <img src="../img/square-1.jpg" class="round">
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <p>
          <span>隐私政策</span>
          <span>广告服务</span>
          <span>使用条款</span>
          <span>联系我们</span>
          <span>关于我们</span>
        </p>
        <p>
          Copyright © 2013 - Aweee
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import Nav from '../components/Nav';

  export default {
    components : { Nav },
  };
</script>
<style scoped>
  .filter {
    background: #ffbe00;
    color: #fffbf2;
  }

  .filter-item {
    font-size: 1.4rem;
    font-weight: 300;
    cursor: pointer;
    padding: 15px 10px;
    text-align: center;
  }

  .filter-item:hover {
    background: rgba(0, 0, 0, .2);
    color: #fff;
  }
</style>
