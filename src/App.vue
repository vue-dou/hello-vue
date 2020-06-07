<template>

  <div id="app">
   <router-view ></router-view>
  </div>

</template>

<script>

  export default {
    name: 'App',
    mounted() {
      window.addEventListener('unload', this.saveState);
    },
    methods: {
      saveState() {
        // 模块化后，调用 state 的代码修改为 this.$store.state.user
        sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user));
      }
    }
  }
</script>
