<template>
  <div id="register">
    <div class="head-nav">
      <navHeader></navHeader>
    </div>
    <div class="register-title">注册</div>
    <div class="register-center">
      <div>
        <ipt placehold="请输入手机号"></ipt>
      </div>
      <div>
        <ipt placehold="请输入右侧图形验证码" slotShow="true">
          <div class="graph-code">
            <!-- 此处为图片     -->
            <!-- <img :src="imgSrc" alt=""/> -->
            90900
          </div>
        </ipt>
      </div>
      <div>
        <ipt placehold="请输入右侧验证码" slotShow="true">
          <button class="btn">获取验证码</button>
        </ipt>
      </div>
      <!-- 多选框 -->
      <div class="checkbox-box">
        <input type="checkbox" id="agreement" />
        <label for="agreement">
          <div>
            本人已阅读并同意<span>注册协议</span>和<span
              >青岛搜大夫互联网医院隐私政策</span
            >
          </div>
        </label>
      </div>
    </div>
    <div class="register-btn">
      <btn></btn>
    </div>
    <div class="remind">
      <div>
       <div> 备注：</div>
       <div>1.所有信息填写正确，且勾选协议，点击完成可注册为会员。并跳转患者信息填写页。</div>
       <div>2.未输入手机号，点击完成，提示“请输入手机号”</div>
       <div>3.验证码未输或者输入错误，点击完成，提示“请输入正确的验证码”</div>
       <div>4.未勾选协议，点击完成，提示“请勾选协议”。</div>
      </div>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/header.vue";
import ipt from "@/components/ipt.vue";
import btn from "@/components/btn.vue";
export default {
  data() {
    return {
      imgSrc: "", //图片地址
    };
  },
  components: {
    navHeader,
    ipt,
    btn,
  },
};
</script>

<style scoped>
#register {
  width: 100%;
  height: 100%;
}
.register-title {
  width: 100%;
  height: 1.8rem;
  font-size: 0.39rem;
  color: var(--index);
  font-family: "STZhongsong";
  text-align: center;
  line-height: 1.8rem;
}
.register-center {
  width: calc(100% - 0.6rem);
  height: 2.3rem;
  /* border-bottom: 1px solid ;
      border-top: 1px solid ; */
  padding: 0 0.3rem;
}
.graph-code {
  min-width: 0.85rem;
  height: 0.25rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  border: 0.01rem solid var(--index);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0.04rem;
  text-align: center;
  line-height: 0.24rem;
  color: var(--index);
}
.graph-code img {
  width: 100%;
  height: auto;
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
input[type="checkbox"] {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 0.14rem;

  position: relative;
}
.input[type="checkbox"]:checked {
  /* background-color: red;
    visibility: hidden; */
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid var(--index);
  border-radius: 2px;
}
input[type="checkbox"]:checked::before {
  content: "\2713";
  background-color: #fff;
  position: absolute;
  top: -1px;
  left: -1px;
  width: 100%;
  border: 1px solid var(--index);
  border-radius: 2px;
  color: var(--index);
  font-size: 20px;
  font-weight: bold;
}
input[type="checkbox"]:checked::after {
  background-color: red;
}
label {
  color: var(--index);
  height: 0.21rem;
  line-height: 0.2rem;
  font-size: 0.16rem;
  width: 2.8rem;
  text-indent: 0.04rem;
}
.checkbox-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.register-btn {
  padding: 0.3rem 0;
}
.remind{
    width: calc(100% - .45rem);
    padding: .30rem;
    font-size: 15px;
    color: #7D7D7D;
    line-height: 24 px;
    padding-right: .15rem;
}
</style>