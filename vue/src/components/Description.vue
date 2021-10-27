<template>
  <div class="main">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    margin: 45px 0;
    text-align: center;
  }
</style>

<script>
export default {
  name: 'Description',
  data: () => ({
    title: 'Hey Man!',
    description: 'Here I will display some of comments from GET request. Please press any buttons and load new comments. Good luck ;)',
  }),
}
</script>