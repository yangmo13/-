<template>
    <div id="btn">
        <button class="btn">{{message?message:'完成'}}</button>
    </div>  
</template>

<script>
    export default {
        props:{
            message:{
                type:String
            }
        }
    }
</script>

<style scoped>
    #btn{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn{
        width: 2.99rem;
        height: .48rem;
        background-color: #BCB98C;
        border-radius: .48rem;
        line-height: .22rem;
        text-align: center;
        font-size: 20px;
        color: white;
        border: none;
    
    }
</style>