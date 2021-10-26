<template>
  <v-app>
    <v-main>
      <Header />
      <Description />
      <UserComments />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Description from './components/Description.vue';
import UserComments from './components/UserComments.vue';

export default {
  name: 'App',

  components: {
    Header,
    Description,
    UserComments
  },
}
</script>
