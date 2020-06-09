<template>
  <div class="register">
    <router-link to="/home" slot="left"><mt-button icon="back"></mt-button></router-link>
    <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field type="password" label="密 码"  placeholder="请输入密码" v-model="password"></mt-field>
    <mt-field type="password" label="确认密码"  placeholder="再次输入密码" ></mt-field>
    <mt-button type="primary" size="large" @click="handler">快速注册</mt-button>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    checkUsername(){
        //用户名的规范
        var usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
        //检测用户名
        if(usernameRegExp.test(this.username)){
            return true;
        } else {
            this.$messagebox.alert('用户名为必填项,且长度为6~12的字符');
            return false;
        }
    },
    handler(){
        if(this.checkUsername()){
          var obj = {
              username:this.username,
              password:this.password
          };
          //QS的stringify()方法用于将数组/对象转换成请求字符串
          this.axios.post('/register',this.qs.stringify(obj)).then((res)=>{
              if(res.data.code == 201){
                this.$messagebox.alert('用户名已经存在','注册提示');
              } 
              if(res.data.code == 200){
                this.$messagebox.alert('用户注册成功','注册提示').then(()=>{
                    this.$router.push('/login')
                });
              }
          });
        }
      
    }
  }
}
</script>