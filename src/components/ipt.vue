<template>
  <div id="ipt">
    <input class="ipt" type="text" :placeholder="placehold" />
    <slot v-if="slotShow" :style="slotShow==true?'padding-right: 1.1rem;':''"></slot>
  </div>
</template>

<script>
export default {
  props: {
    placehold: {
      type: String,
    },
    btnMessage: {
      type: String,
    },
    slotShow:{
      type:Boolean
    }
  },
};
</script>

<style scoped>
#ipt {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0.15rem 0;
}
.ipt {
  width: 1.8rem;
  height: 0.3rem;
  border: 0.01rem solid rgba(0, 0, 0, 0);
  border-bottom: 0.01rem solid var(--index);
  flex: 1;
  padding: 0 .1rem;
}
.ipt:focus {
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  border-bottom: 0.01rem solid var(--index);
}

</style>