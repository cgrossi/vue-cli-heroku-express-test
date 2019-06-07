<template>
  <div id="footer">
    <p>Copyright {{ year }} Carmine Grossi</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: ""
    };
  },
  methods: {},
  created: function() {
    let year = new Date().getFullYear();
    this.year = year;
  }
};
</script>

<style scoped>
#footer {
  background-color: cornflowerblue;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>