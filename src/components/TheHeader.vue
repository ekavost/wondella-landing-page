<template>
  <v-app-bar app>
    <template v-slot:extension>
      <the-nav-bar></the-nav-bar>
    </template>
  </v-app-bar>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";

export default {
  name: "the-header",
  components: {
    TheNavBar,
  },
};
</script>
