<template>
    <div class="nav">
        <div class="navList">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#3298da"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>库存</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">库存</el-menu-item>
                        <el-menu-item index="1-2">领用审核</el-menu-item>
                        <el-menu-item index="1-3">申购审核</el-menu-item>
                        <el-menu-item index="1-4">领用历史</el-menu-item>
                        <el-menu-item index="1-5">入库历史</el-menu-item>
                        <el-menu-item index="1-6">申购历史</el-menu-item>
                        <el-menu-item index="1-7">报损历史</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>审核</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">领用审核</el-menu-item>
                        <el-menu-item index="2-2">申购审核</el-menu-item>
                        <el-menu-item index="2-3">采购审核</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">统计</span>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>设置</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">成员权限</el-menu-item>
                        <el-menu-item index="4-2">机构信息</el-menu-item>
                        <el-menu-item index="4-3">子机构管理</el-menu-item>
                        <el-menu-item index="4-3">审批设置</el-menu-item>
                        <el-menu-item index="4-3">系统设置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
import API from "../../utils/api.js";
export default {
  data() {
    return {
     
    };
  },
  methods: {
    // btnlgfg(){
    //      let queryData = {
    //          id:"efae3ada94ae4ca2bb899a35d1c5e1a2"
    //      };
    //         this.$http(this.$api.updateUser, "")
    //         .then(res=>{
    //             this.$router.push({ path:'/indexDetail'})
    //         })
    // }
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.nav,
.navList {
  height: 100%;
}
.navList {
  width: 300px;
}
.navList ul {
  height: 100%;
}
</style>
