<script>
import MGPList from './components/mgp-list.vue';
import MgpUserGrid from './components/mgp-user-grid.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  components:{
    MGPList,
    MgpUserGrid
}
}
</script>

<template>
  <div class="app-main-container">
    <MGPList></MGPList>
    <MgpUserGrid></MgpUserGrid>
  </div>
</template>

<style scoped>
.app-main-container{
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
