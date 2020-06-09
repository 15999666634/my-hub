<template>
  <div class="me">
    <!-- 用户头像开始 -->
    <div class="me-img">
      <img src="../../public/images/icon/user.png">
    </div>
    <!-- 用户头像结束 -->
    <!-- 登录/注册开始 -->
    <div class="lagin"  v-if="$store.state.author.isLogined!==true">
      <router-link to="/login">
        <mt-button type="primary" class="button">登录</mt-button> 
      </router-link>
      <router-link to="/register">
        <mt-button type="primary" class="button">注册</mt-button>
      </router-link>
    </div>
    <!-- 登录，注册结束 -->
    <!-- 登录后关联的用户相关信息开始 -->
    <ul class="user" v-else>
      <li>
        <p>999999</p>
        <p>动态</p>
      </li>
      <li>
        <p>0</p>
        <p>关注</p>
      </li>
      <li>
        <p>800000</p>
        <p>粉丝</p>
      </li>
    </ul>
    <!-- 登录后关联的用户相关信息结束 -->
    <!-- 横向功能区域开始 -->
    <ul class="shop">
      <router-link to="">
        <li>
          <img src="../../public/images/icon/kechengguanli.png">
          <P>我的课程</P>
        </li>
      </router-link>   
      <router-link to="">
        <li>
          <img src="../../public/images/icon/daka.png">
          <p>打卡-签到</p>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <img src="../../public/images/icon/liulanjilu.png">
          <p>浏览历史</p>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <img src="../../public/images/icon/jihua.png">
          <p>计划</p>
        </li>
      </router-link>
    </ul>
    <!-- 横向功能区域结束 -->
    <!-- 功能列表开始 -->
    <div class="cell">
      <mt-cell title="饮食推荐" isLink to="/eat" >
        <img src="../../public/images/icon/foot.png"  slot="icon">
      </mt-cell>
      <mt-cell title="我的收藏" isLink to="">
        <img src="../../public/images/icon/sc.png"  slot="icon">
      </mt-cell>
      <mt-cell title="个人信息" isLink to="">
        <img src="../../public/images/icon/person.png"  slot="icon">
      </mt-cell>
    </div>
    <!-- 功能列表结束 -->
  </div>
</template>
<style  scoped>
  *{margin:0;padding:0}
  .me{
    position:relative;
    width:100%;
    height:100%;
  }
  /* 用户头像 */
  .me .me-img>img{
    position:absolute;
    top:70px;
    left:36%;
    height:100px;
  }
  /* 登录与注册 */
  .me .lagin{
    position:absolute;
    display:block;
    top:180px;
    left:28%;
    margin-right:20px;
  }
  /* 登录与注册按钮 */
  .lagin .button{
    height:31px;
    width:80px;
    border-radius:10px;
    margin-right:6px;
  }
  /* 登录后关联用户相关信息样式开始 */
  .me .user{
    display: flex;
    position: absolute;
    top:1.6rem;
    left:0.6rem;
    text-align: center;
  }
  .me .user>li{
    margin:0 20px;
    font-size: 13px;
    font-weight:400;
  /* 登录后关联用户相关信息样式结束 */

  }
  /* 横向功能区域样式 */
  .shop{
    position: relative;
    display: flex;
    /* 365px */
    width:365px;
    top:225px;
    margin:0 auto;
    padding-bottom:37px;
    padding-top:10px;
    text-align:center;
    background-color:#e8e8e8;
    border-radius:5px;
    
  }
  .shop li{
    margin:0 15px;
    font-size:16px;
    font-weight:700; 
  }
  .shop li img{
    height: 40px;
    margin: 20px 0px;
  }
  /* cell功能列表样式 */
  .me>.cell{
    display:block;
    margin-top:245px;
  }
</style>
<script>
  export default{
    
  }
</script>


