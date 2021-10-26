<template>
  <div>
      <div class="buttons">
        <v-btn color="primary"
               @click="getComments(1)">
          get comments 1
        </v-btn>

        <v-btn color="primary"
               @click="getComments(2)">
          get comments 2
        </v-btn>

        <v-btn color="primary"
               @click="getComments(3)">
          get comments 3
        </v-btn>

        <v-btn color="primary"
               @click="getComments(4)">
          get comments 4
        </v-btn>
      </div>

      <div class="text-center" v-if="loading">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
      </div>
      <Comments :comments="comments"/>
      <v-alert type="error" v-if="error">
        Something is wrong, please try again.
      </v-alert>
  </div>
</template>

<script>
import getUserComments from "@/services/API";
import Comments from "@/components/Comments";

export default {
  name: 'UserComments',

  components: {
    Comments
  },

  data: () => ({
    loading: false,
    comments: null,
    error: false
  }),

  methods: {
    async getComments(id) {
      this.loading = true
      this.comments = await getUserComments(id)
      !this.comments ? this.error = true : this.error = false
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 45px;
}
</style>