<template>
  <div id="login">
    <div class="header-login">登录</div>
    <div class="login-ipt">
      <div class="login-ipt-nav">
        <div
          :class="
            checkedNav == 1
              ? 'login-ipt-nav-account'
              : 'login-ipt-nav-account unchecked'
          "
        >
          账号密码登录
        </div>
        <div
          :class="
            checkedNav == 2
              ? 'login-ipt-nav-account'
              : 'login-ipt-nav-account unchecked'
          "
        >
          验证码登录
        </div>
      </div>
      <div class="login-ipt-body">
        <ipt placehold="请输入手机号" checked="false"></ipt>
        <ipt
          placehold="请输入验证码"
          btnMessage="输入验证码"
          checked="true" slotShow="true"
        > <button class="btn">获取验证码</button></ipt>
      </div>
    </div>
    <div class="new-user">新用户注册</div>
    <div class="login-btn">
      <btn></btn>
    </div>
    <div class="remind">
            <div>备注：</div>
            <div>1.扫码后直接跳转登录页，默认验证码登录，输入正确手机号，验证码，点击登录。</div>
            <div>2.若未注册会员，需提示“该用户未注册”，点击新用户注册可跳转注册页。注册后自动跳转患者导入页。</div>
            <div>3.若已注册会员，输入信息，点击登录，直接跳转患者导入页面。</div>
      
     
      
      
    </div>
  </div>
</template>

<script>
import ipt from "@/components/ipt.vue";
import btn from "@/components/btn.vue";
export default {
  data() {
    return {
      checkedNav: 1,
    };
  },
  components: {
    ipt,
    btn,
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
}
.header-login {
  width: 100%;
  height: 1.8rem;
  font-size: 0.39rem;
  color: var(--index);
  font-family: "STZhongsong";
  text-align: center;
  line-height: 1.8rem;
}
.login-ipt {
  width: 100%;
  display: flex;
  margin-top: 0.12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-ipt-nav {
  height: 0.32rem;
  width: 2.65rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
.login-ipt-nav-account,
.login-ipt-nav-code {
  border: 0.01rem solid #828225;
  flex: 2;
  color: var(--index);
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.3rem;
}

.unchecked {
  border: 0.01rem solid var(--gray);
}
.new-user {
  width: calc(100% - 0.7rem);
  height: 0.35rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--index);
  font-size: 16px;
  padding: 0 0.35rem;
}
.login-ipt-body {
  margin-top: 0.12rem;
}
.login-btn {
  margin-top: 0.7rem;
}
.remind{
    width: calc(100% - .45rem);
    padding: .30rem;
    font-size: 15px;
    color: #7D7D7D;
    line-height: 24 px;
    padding-right: .15rem;
}
.btn {
  min-width: 0.5rem;
  height: 0.3rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: #057013;
}
</style>