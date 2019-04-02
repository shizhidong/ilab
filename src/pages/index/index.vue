<template>
    <div>32423423432{{msg}}
    <el-button type="primary" @click="btnlgfg">主要按钮</el-button>

    </div>
       
</template>
<script>
import API from '../../utils/api.js'
    export default{
        data(){
            return{
               msg:"你好" ,
            }
        },
        methods:{
            btnlgfg(){
                 let queryData = {
                     id:"efae3ada94ae4ca2bb899a35d1c5e1a2"
                 };
                    this.$http(this.$api.updateUser, "")
                    .then(res=>{
                        this.$router.push({ path:'/indexDetail'})
                    })
            }
            
        }
    }



</script>
