<template>
  <div id="addSuccess">
    <!-- 头部 -->
    <div class="navHeader">
      <navHeader></navHeader>
    </div>
    <!-- 成功提示 -->
    <div class="success-message">
      <div class="success-message-main">
        <div class="success-message-icon">
          <img src="@/assets/addSuccess/success.png" alt="" />
        </div>
        <div class="success-message-mes">新增成功</div>
        <button class="success-message-btn">再次添加</button>
      </div>
    </div>
    <!-- 注释 -->
    <div class="remind">
      注释：支持患者重复添加相同的患者。但是已存在的患者，医生端不再重复提醒。
    </div>

    <div class="remark">
      <div>备注：</div>
      <div>回退键点击关闭当前页面</div>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/header";
export default {
  components: {
    navHeader,
  },
};
</script>

<style scoped>
#addSuccess {
  width: 100%;
  height: 100%;
  background-color: var(--back);
}
.success-message {
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.success-message-icon {
  width: 0.38rem;
  height: 0.38rem;
}
.success-message-icon img {
  width: 100%;
  height: 100%;
}
.success-message-mes {
  color: var(--index);
  font-size: 0.18rem;
  font-weight: 550;
padding-top: .15rem;
padding-bottom:.2rem ;
}
.success-message-btn {
  width: 0.87rem;
  height: 0.26rem;
  background-color: #b8cdae;
  border-radius: 0.26rem;
  text-align: center;
  line-height: 0.25rem;
  font-size: 0.14rem;
  color: #333;
  border: none;
}
.success-message-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.remind {
  color: #333;
  font-size: 0.12rem;
  padding: 0.07rem 0.16rem;
}
.remark {
    color: #7D7D7D;
    font-size: .15rem;
    padding: .2rem;
    margin-top: .65rem;
}
</style>