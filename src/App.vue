<template>
  <div id="smart-loader"></div>
</template>

<script>
export default {
  name: "App",
  created(){
    this.$spinner.radar()
  }
};
</script>
