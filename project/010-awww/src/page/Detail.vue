<template>
  <div>
    <Nav/>
    <div class="container slider por">
      <div>
        <div>
          <img class="round" src="../img/slider-2.jpg" alt="Yo">
        </div>
      </div>
      <div class="mask round"></div>
      <div class="info">
        <div class="prop-list">
          <div class="prop">
            <span>产地</span>
            <span>何家营</span>
          </div>
          <div class="prop">
            <span>品种</span>
            <span>沙皮</span>
          </div>
          <div class="prop">
            <span>产地</span>
            <span>何家营</span>
          </div>
          <div class="prop">
            <span>品种</span>
            <span>沙皮</span>
          </div>
          <div class="prop">
            <span>产地</span>
            <span>何家营</span>
          </div>
          <div class="prop">
            <span>品种</span>
            <span>沙皮</span>
          </div>
          <div class="prop">
            <span>产地</span>
            <span>何家营</span>
          </div>
          <div class="prop">
            <span>品种</span>
            <span>沙皮</span>
          </div>
        </div>
        <h1>你瞅啥</h1>
      </div>
      <button class="btn-primary btn-large buy">￥2000 购买</button>
    </div>

    <div class="main">
      <div class="container no-padding detail round">
        <div class="other-info center">
          <div class="col-lg-2">5个月</div>
          <div class="col-lg-2">已打疫苗</div>
          <div class="col-lg-2">无遗传病</div>
          <div class="col-lg-2">已绝育</div>
          <div class="col-lg-2">拉布拉多纯种</div>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur consequuntur dolorem doloremque
          dolorum enim explicabo labore maiores nesciunt nihil pariatur, reprehenderit? Esse magnam nulla quas.
          Laudantium
          rerum veritatis voluptatum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur consequuntur dolorem doloremque
          dolorum enim explicabo labore maiores nesciunt nihil pariatur, reprehenderit? Esse magnam nulla quas.
          Laudantium
          rerum veritatis voluptatum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur consequuntur dolorem doloremque
          dolorum enim explicabo labore maiores nesciunt nihil pariatur, reprehenderit? Esse magnam nulla quas.
          Laudantium
          rerum veritatis voluptatum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur consequuntur dolorem doloremque
          dolorum enim explicabo labore maiores nesciunt nihil pariatur, reprehenderit? Esse magnam nulla quas.
          Laudantium
          rerum veritatis voluptatum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur consequuntur dolorem doloremque
          dolorum enim explicabo labore maiores nesciunt nihil pariatur, reprehenderit? Esse magnam nulla quas.
          Laudantium
          rerum veritatis voluptatum!
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
  h1 {
    font-size: 60px;
    font-weight: 900;
  }

  .slider:hover .mask,
  .slider:hover .info {
    opacity: 1;
  }

  .mask {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    margin-left: 5px;
    margin-right: 5px;
  }

  .info {
    opacity: 0;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    width: 50%;
    line-height: 2rem;
    font-size: 1.1rem;
  }

  .mask, .info {
    -webkit-transition: opacity .2s;
    -moz-transition: opacity .2s;
    -ms-transition: opacity .2s;
    -o-transition: opacity .2s;transition: opacity .2s;
  }

  .prop > *:first-child {
    opacity: .7;
    margin-right: 10px;
  }

  .prop > *:nth-child(2) {
  }

  .buy {
    position: absolute;
    bottom: 40px;
    right: 60px;
  }

  .detail {
    border: 5px solid #ffbe00;
  }

  .detail .other-info {
    border-bottom: 5px solid #ffbe00;
  }

  .detail .other-info > * {
    padding: 10px;
    color: #ffbe00;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .detail .content {
    padding: 10px;
    background: #fff;
  }
</style>
