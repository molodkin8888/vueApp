<template>
  <v-card
      class="mx-auto overflow-hidden"
  >
    <v-app-bar
        color="blue"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ welcome }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="blue --text text--accent-4"
        >
          <v-list-item @click.stop="dialog = true">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About this App</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-dialog
        v-model="dialog"
        max-width="450"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ info }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Got it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    dialog: false,
    welcome: 'Welcome to my test-task :)',
    title: 'What I am using on this app ?',
    info: 'Actually I am using different components from Vuetify, axios for sending GET request, props for sending to "Comments" component the relevant data and simple JEST test'
  }),
}
</script>