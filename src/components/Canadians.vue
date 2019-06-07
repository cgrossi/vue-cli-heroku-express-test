<template>
  <div id="canada">
    <h2>People from Canada go here</h2>
    <p>Here is a list of people from Canada:</p>
    <p>Testing nested components, life-cycle hooks, and passed props.</p>
    <ul>
      <li v-for="(name, key) in cadNames()" @click="name.show = !name.show" :key="key">
        <h2>{{ name.name }}</h2>
        <h4 class="rule" v-if="name.show">Age: {{ name.age }}</h4>
        <h4 v-show="name.show">Location: {{ name.location }}</h4>
        <h4 v-show="name.show">Key: {{ key }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["names"],
  data() {
    return {
      cadFilter: ""
    };
  },
  methods: {
    cadNames: function() {
      return this.names.filter(el => el.location === "Canada");
    }
  },
  created: function() {
    this.cadNames();
  }
};
</script>

<style scoped>
#canada {
  background-color: rgb(193, 215, 255);
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  width: 600px;
  margin: 0 auto;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}

li {
  width: 200px;
  margin: 10px;
  padding: 15px 25px;
  min-height: 50px;
  background-color: rgba(250, 250, 250, 0.925);
  border: 1px solid cornflowerblue;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-basis: auto;
}

.rule {
  border-top: 1px solid rgba(214, 214, 214, 0.904);
  padding-top: 9px;
}

p {
  margin-bottom: 5px;
}
</style>