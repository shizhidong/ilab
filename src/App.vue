<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{padding: 0; margin:0; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif}
#app{height:100%}
html,body{height:100%;}
.el-menu-item-group__title{padding: 0px 0 0px 0px;}
.el-submenu__title i{color:#fff!important}
.el-menu-item i{color:#fff!important}
</style>
