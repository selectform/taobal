<template>
  <div>
    <el-container>
        <el-header>
          <tophead></tophead>
        </el-header>
        <el-main>
          <!-- 主体 -->
          <router-view></router-view>
        </el-main>
        <el-footer>
          <foot></foot>
        </el-footer>
    </el-container>
  </div>
</template>
<script>
import tophead from './tophead.vue';
import foot from './foot.vue';
export default {
  name: 'heads',
  data() {
    return {

    }
  },
  components: {
    'tophead': tophead,
    'foot': foot
  }
}
</script>
<style lang="scss">

</style>


