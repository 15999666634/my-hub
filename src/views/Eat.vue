<template>
  <div class="eat">
    <!-- 返回按钮开始 -->
    <router-link to="/home">
      <mt-button class="back" icon="back">
      </mt-button>
    </router-link>
    <!-- 返回按钮结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="navbar">
      <mt-tab-item id="1">
        早餐
      </mt-tab-item>
      <mt-tab-item id="2">
        午餐
      </mt-tab-item>
      <mt-tab-item id="3">
        晚餐
      </mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板内容开始 -->
    <mt-tab-container v-model="navbar">
      <!-- 早餐内容列表开始 -->
      <mt-tab-container-item id="1">
        <ul class="breakfast">
          <li class="title">
            <p>主食:</p>
            <p>
              <img src="../../public/images/icon/758b8188f8ee285f76fcfc5bad00f0f7.jpg"> 
            </p>
            <p>馒头(约256克)</p>
            
          </li>
          <li class="title">
            <p>蛋白质:</p>
            <p>
              <img src="../../public/images/icon/6cc28ad941db40a90728c94aeba3d289.jpg"> 
            </p>
            <p>酸奶(约168克)</p>
          </li>            
          <li class="title">
            <p>蔬果:</p>
            <p>
              <img src="../../public/images/icon/70e4cd33cc0787e4a7c105beaa4f3836.jpg"> 
            </p>
            <p>香蕉(约240克)</p>
          </li>
           <li class="title">
            <p>油脂:</p>
            <p>
              <img src="../../public/images/icon/509e13ee842e309970868c5bb6e752cc.jpg"> 
            </p>
            <p>黑芝麻(约19克)</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <!-- 早餐内容列表结束 -->
      <!-- 午餐内容列表开始 -->
      <mt-tab-container-item id="2">
        <ul class="breakfast">
          <li class="title">
            <p>主食:</p>
            <p>
              <img src="../../public/images/icon/b502cb125d770832a7438c57423a615c.jpg"> 
            </p>
            <p>米饭(约260克)</p>
            
          </li>
          <li class="title">
            <p>蛋白质:</p>
            <p>
              <img src="../../public/images/icon/c55de4f2820d5164209464e8b43873c4.jpg"> 
            </p>
            <p>鸡蛋(约149克)</p>
          </li>            
          <li class="title">
            <p>蔬果:</p>
            <p>
              <img src="../../public/images/icon/c4e387098684052c93b2a44f17915499.jpg"> 
            </p>
            <p>苹果(约226克)</p>
          </li>
           <li class="title">
            <p>油脂:</p>
            <p>
              <img src="../../public/images/icon/07f34fb1e6cd9b1c5eb4a3199d1cccad.jpg"> 
            </p>
            <p>橄榄油(约32克)</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <!-- 午餐内容列表结束 -->
        
      <!-- 晚餐内容列表开始 -->
      <mt-tab-container-item id="3">
        <ul class="breakfast">
          <li class="title">
            <p>主食:</p>
            <p>
              <img src="../../public/images/icon/b502cb125d770832a7438c57423a615c.jpg"> 
            </p>
            <p>米饭(约260克)</p>
            
          </li>
          <li class="title">
            <p>蛋白质:</p>
            <p>
              <img src="../../public/images/icon/c55de4f2820d5164209464e8b43873c4.jpg"> 
            </p>
            <p>鸡蛋(约149克)</p>
          </li>            
          <li class="title">
            <p>蔬果:</p>
            <p>
              <img src="../../public/images/icon/c4e387098684052c93b2a44f17915499.jpg"> 
            </p>
            <p>苹果(约226克)</p>
          </li>
           <li class="title">
            <p>油脂:</p>
            <p>
              <img src="../../public/images/icon/07f34fb1e6cd9b1c5eb4a3199d1cccad.jpg"> 
            </p>
            <p>橄榄油(约32克)</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <!-- 晚餐内容列表结束 -->
    </mt-tab-container>
    <!-- 面板内容结束 -->
  </div>
</template>
<style scoped>
  .eat{
    position: relative;
    top:90px;
  }
  /* 图片样式 */
  .eat img{
    width:50px;
    border-radius:10%;
  }
  /* 设置分割线 */
  .breakfast .title{
    display:flex;
    border-bottom:1px solid rgb(7, 20, 47) ;
  }
  
  .breakfast .title p{
    text-align: center;
    margin-left:20px;
    font-size: 15px;
    font-weight:400;
    padding:5px 10px;
    line-height:40px;
  }
  /* 设置ul>li>第一个标题p 元素样式 */
  .title :first-child{
    width:50px;
    font-size:18px ;
  }
  .eat .mint-button{
    position: absolute;
    margin-top:-45px;
    background-color:#fff;
  }
</style>
<script> 
  export default {
    data(){
      return{
        navbar:'1'
      }
    }
  }
</script>