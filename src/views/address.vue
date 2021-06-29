<template>
  <div id="address">
    <!--  -->
    <headNav title="新增患者"></headNav>

    <div class="user-message">
      <ipt title="患者姓名"></ipt>
      <ipt title="身份证"></ipt>
      <ipt title="手机号"></ipt>
      <div class="pick">
        <van-field
          v-model="state.value"
          readonly
          clickable
          label="城市 :"
          placeholder=""
          @click="state.showPicker = true"
          id="fieldTxt"
        />
        <van-popup v-model:show="state.showPicker" round position="bottom">
          <van-picker
            :columns="columns"
            @cancel="state.showPicker = false"
            @confirm="onConfirm"
            id="pick-box"
          />
        </van-popup>
        <div class="right-icon" @click="state.showPicker = true">
          <img src="@/assets/header/left.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headNav from "@/components/header";
import ipt from "@/components/ipt_text";
export default {
  data() {
    return {
      columns: [
        // 第一列
        {
          values: ["周一", "周二", "周三", "周四", "周五"],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ["上午", "下午", "晚上"],
          defaultIndex: 1,
        },
      ],
      state: {
        value: "",
        showPicker: false,
      },
    };
  },
  components: {
    headNav,
    ipt,
  },
};
</script>

<style scoped>
#address {
  width: 100%;
  height: 100%;
  background-color: var(--back);
}
.user-message {
  width: 100%;
  /* height: 1.8rem; */
  background-color: #fff;
}
.pick {
  width: calc(100% - 0.3rem);
  height: 0.47rem;
  padding: 0 0.15rem;
  padding-left: 0.1rem;
  background-color: #fff;
}
.ipt {
  display: block;
  border: none;
  flex: 1;
  height: 0.4rem;
  background-color: rgba(0, 0, 0, 0);
  padding: 0 0.1rem;
  font-size: 0.15rem;
  padding-left: 0;
}
.ipt:focus {
  outline: none;
}
.important {
  position: absolute;
  right: 0px;
  top: 0.05rem;
  display: inline-block;
  color: #ff0000;
  height: 0.15rem;
  line-height: 0.15rem;
}
.important-box {
  position: relative;
  padding-right: 0.1rem;
  font-size: 0.14rem;
  color: #333;
}
.pick {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.ipt-text {
  min-width: 0.6rem;
  color: #333;
  font-size: 16px;
  position: relative;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pick-down {
  flex: 1;
  height: 100%;
}
#fieldTxt >>> .van-field__label {
  color: #333 !important;
  font-size: 0.15rem !important;
  min-width: 0.6rem;
  color: #333;
  font-size: 16px;
  position: relative;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#fieldTxt {
  padding: 0 !important;
  border: none !important;
}
.pick >>> .van-cell {
  padding: 0 !important;
  border: none !important;
}
.pick >>> .van-cell::after {
  padding: 0 !important;
  border: none !important;
}
.right-icon {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  right: 0.3rem;
  top:.14rem;
  transform: rotate(270deg);
}
.right-icon img {
  width: 100%;
  height: auto;
}
</style>