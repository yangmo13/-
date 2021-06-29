<template>
    <div id="text-ipt">
        <div class="ipt-box">
            <div class="ipt-text"><div class="important-box">{{title?title:'暂无'}} <div class="important">*</div> </div> : </div>
            <input class="ipt" type="text" :placeholder="placehold"/>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            placehold:{
                type:String
            },
            title:{
                type:String
            }
        }
    }
</script>

<style scoped>
#text-ipt{
    width: calc(100% - .3rem);
    height: 100%;
    padding: 0 .15rem;
    padding-left: .1rem;
}
.ipt-box{
    display: flex;
    justify-content: center;
    align-items: center;
    height: .47rem;
    border-bottom: 1px solid #BCB98C;
    padding: 0 .1rem;
    padding-left: 0;
}
.ipt-text{
    min-width: .6rem;
    color: #333;
    font-size: 16px;
    position: relative;
    height: .4rem;
    line-height: .4rem ;
    padding: 0 .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ipt{
    display: block;
    border: none;
    flex: 1;
    height: .4rem;
    background-color: rgba(0, 0, 0, 0);
    padding: 0 .1rem;
    font-size: .15rem;
    padding-left: 0;
}
.ipt:focus{
    outline: none;
}
.important{
    position: absolute;
    right: 0px;
    top: .05rem;
    display: inline-block;
    color: #FF0000;
    height: .15rem;
    line-height: .15rem;
}
.important-box{
    position: relative;
    padding-right: .1rem;
    font-size: .14rem;
    color: #333;
}
</style>