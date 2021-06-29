<template>
  <div id="code">
    <div class="nav">
      <navHead title="信息登记"></navHead>
    </div>

    <!-- 信息登录 -->
    <div class="message">
      <div class="message-vessol">
        <ipt title="就诊人姓名"></ipt>
      </div>
      <div class="message-vessol">
        <ipt title="就诊人姓名"></ipt>
      </div>
      <div class="message-vessol">
        <ipt title="就诊人姓名"></ipt>
      </div>
    </div>
    <div class="code-btn">
      <button class="btn">提交</button>
    </div>
    <!-- 就诊人信息列表 -->
    <div class="code-list">
      <div class="code-list-title">所有就诊人信息（可直接导入）</div>
      <div class="code-list-vessol">
        <div class="code-list-page" v-for="(item, index) in list" :key="index">
          <div class="code-list-page-header">
            <img :src="item.header" alt="" />
          </div>
          <div class="code-list-page-message">
              <div class="code-list-page-message-name">
                  <div>就诊人姓名：{{item.name}}</div>
                  <div>{{item.sex}}</div>
                  <div>{{item.age}}</div>
              </div>
              <div class="code-list-page-message-phone">手机号：{{item.phone}}</div>
              <div class="code-list-page-message-idcard">身份证号：{{item.idcard}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="remind">
      <div>备注：</div>
      <div>回退键点击关闭当前页面</div>
    </div>
  </div>
</template>

<script>
import navHead from "@/components/header";
import ipt from "@/components/ipt_text";
import btn from "@/components/btn";
export default {
  data() {
    return {
      //模拟列表 链接api可删除
      list: [
        {
          title: "999",
          name: "李逵",
          sex: "man",
          age: "20",
          phone: "15112597245",
          idcard: "2302022002022020202020",
          header: require("../assets/test/header.png"),
        },
        {
          title: "999",
          name: "李逵",
          sex: "man",
          age: "20",
          phone: "15112597245",
          idcard: "2302022002022020202020",
          header: require("../assets/test/header.png"),
        },
        {
          title: "999",
          name: "李逵",
          sex: "man",
          age: "20",
          phone: "15112597245",
          idcard: "2302022002022020202020",
          header: require("../assets/test/header.png"),
        },
        {
          title: "999",
          name: "李逵",
          sex: "man",
          age: "20",
          phone: "15112597245",
          idcard: "2302022002022020202020",
          header: require("../assets/test/header.png"),
        },
      ],
    };
  },
  components: {
    navHead,
    ipt,
    btn,
  },
};
</script>

<style scoped>
#code {
  width: 100%;
  height: 100%;
  background-color: #e6e4dd;
}
.message {
  background-color: #fff;
  margin-top: 0.5rem;
}
.code-btn {
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 3.47rem;
  height: 0.37rem;
  background-color: #bcb98c;
  border-radius: 0.1rem;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.17rem;
  color: white;
  border: none;
  text-align: center;
}
.code-list-title {
  padding: 0 0.2rem;
  padding-bottom: 0.1rem;
}
.code-list-vessol {
  width: 100%;
  height: 3.2rem;
  /* border-top: 1px solid black;
     border-bottom: 1px solid black; */
  overflow-y: scroll;
}
.code-list-page {
  width: calc(100% - .3rem);
  height: .9rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .1rem .15rem;
}
.code-list-page:last-child{
    margin-bottom: 0;
}
.remind {
  background-color: #e6e4dd;
  padding: 0.12rem 0.2rem;
  color: #7d7d7d;
  font-size: 0.15rem;
  line-height: 0.25rem;
  padding-bottom: .3rem;
}
.code-list-page-header {
  width: 0.55rem;
  height: 0.55rem;
  /* border: 1px solid black; */
}
.code-list-page-header img {
  width: 100%;
  height: 100%;
}
.code-list-page-message{
    flex: 1;
    height: 100%;
    margin-left: .15rem;
    color: #333;
        font-size: 13px;
}
.code-list-page-message-name{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    
}
.code-list-page-message-phone{
    padding: .15rem 0;
}
</style>