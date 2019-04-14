<template>
  <div id="app">
  <div class="sideNav">
    <sideNav></sideNav>
  </div>
  <div class="ilab_container">
    <router-view/>
    </div>
  </div>
</template>

<script>
import sideNav from './components/sideNav'
export default {
  name: "App",
  data() {
    return {

    }
  },
 components:{
   sideNav
 }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
#app {
  height: 100%;
}
html,
body {
  height: 100%;
}
.el-menu-item-group__title {
  padding: 0px 0 0px 0px;
}
.el-submenu__title i {
  color: #fff !important;
}
.el-menu-item i {
  color: #fff !important;
}
.el-menu-item a{color:#fff}
.sideNav{
  height: 100%;
  width:300px;
  float: left;
}
.ilab_container{
  float: left;
}
</style>
