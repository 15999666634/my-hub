<template>
  
  <div class="login">
    <router-link to="/home" slot="left"><mt-button icon="back"></mt-button></router-link>
    <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field type="password" label="密 码"  placeholder="请输入密码" v-model="password"></mt-field>
    <mt-button type="primary" size="large" @click="login">登录</mt-button>
  </div>
</template>
<style scope>
  .login{
    position: relative;
    margin:50px auto;
  }
  /* 登录按钮样式 */
  .mint-button.mint-button--large{
    background-color:#656b79;
    margin:30px auto;
  } 
</style>

<script>
  export default{
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      login(){
        var obj = {
          username:this.username,
          password:this.password
        };
        this.axios.post('/login',this.qs.stringify(obj)).then((res)=>{
            if(res.data.code == 202){
              this.$messagebox.alert('用户名或密码错误','登录提示');
            }
            if(res.data.code == 200){        
              this.$store.commit('userLogined',res.data.info);
              this.$router.push('/home')
              // console.log(res.data.info);
            };
        })
      }
    }
  }
</script> 