<template>
    <el-form :rules="rules" ref="form" :model="loginform" label-width="80px" style="width: 400px;margin-left: 35%;margin-top: 10%">
      <el-form-item prop="username" label="账户："  >
        <el-tooltip class="item"  content="长度在 5 到 20 个字符"  effect="light" placement="right-start">
        <el-input v-model="loginform.username"  ></el-input>
        </el-tooltip>
      </el-form-item>
      <el-form-item prop="password" label="密码："  >
        <el-tooltip class="item"  content="长度在 5 到 20 个字符"  effect="light" placement="right-start">
        <el-input v-model="loginform.password"  ></el-input>
        </el-tooltip>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
        <el-button type="primary" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
</template>

<style>




    body {

      background: url("/static/imgs/main-back.jpg") repeat;
      text-align: center;
      vertical-align: middle;
      margin:0px auto;
    }
</style>

<script src=""></script>
<script>



  export default {


    data() {


      var validater = this.$validater;

      return {
        loginform: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, //是否必填
              trigger: 'blur', //何事件触发
              validator:validater.emptyValidator
            },
            //可以设置双重验证标准
            { min: 5, max: 20,  message: '长度在 5 到 20 个字符'}
          ],
          password:[
            { required: true, //是否必填
              trigger: 'blur',  //何事件触发
              validator:validater.emptyValidator

            },
            //可以设置双重验证标准
            { min: 5, max: 20,  message: '长度在 5到 20 个字符', }
          ]

        }
      }
    },
    methods: {

      loginSuccess:function () {
        this.$message('这是一条消息提示');
      },

      login: function () {
        this.$refs.form.validate((valid) => {
          if(valid){
          var that = this;
          var router = this.$router;
          var params = new URLSearchParams();
          params.append('username', this.loginform.username);
          params.append('password', this.loginform.password)
            that.$validater.doPost(that,
            '/common/login', params,
            function (response) {

              if (response.data.success) {

                that.$validater.showSuccessBottomRight(that,'登陆成功');
                that.$validater.goTo(that,'/main');
              }


            },
              function (error) {
              console.log(error);
            });
        }})
        },

      onSubmit() {
        this.login();
      },

      resetForm(){
        this.$refs.form.resetFields();
      }

    }


  }
</script>
