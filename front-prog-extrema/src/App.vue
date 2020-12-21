<template>
  <div id="app">
    <TheHeader />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  padding: 30px 20px;
  max-width: 980px;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

body,
input,
button {
  font: 14px Quicksand, sans-serif;
}

button {
  cursor: pointer;
}

.content {
  padding: 1em;
  margin-top: 4em;
  margin-bottom: 4em;
}
</style>
