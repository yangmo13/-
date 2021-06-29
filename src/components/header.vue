<template>
    <div id="header">
        <div class="header-img">
            <img src="@/assets/header/left.png" alt="">
        </div>
        <div class="title">{{title}}</div>
        <div class="toright"></div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String
            }
        }
    }
</script>

<style scoped>  
#header{
    width: 100%;
    height: .5rem;
 /* background-color: #fff;` */
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.header-img{
    width: .2rem;
    height: .2rem;
    padding: .2rem .05rem;
}
.header-img img{
    width: 100%;
    height: 100%;
}
.toright{
    padding: .2rem;
}
.title{
    font-size: 16px;
    color: #333;
}
</style>