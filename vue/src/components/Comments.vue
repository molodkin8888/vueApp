<template>
  <v-expansion-panels>
    <v-expansion-panel
        v-for="item in comments"
        :key="item.id"
    >
      <v-expansion-panel-header>
        comment {{ item.id }} from {{ item.email }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ item.body }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comments: {
      type: Array
    }
  }
}
</script>