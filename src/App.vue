<template>
  <form class="form" @submit.prevent="">
    <fieldset>
      <BaseSuggest />
    </fieldset>
  </form>
</template>

<script>
import BaseSuggest from './components/BaseSuggest.vue'

export default {
  name: 'App',
  components: {
    BaseSuggest
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.form {
  margin: 120px 0 0 0;

  & fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
    margin: 0;
  }
}
</style>
