<template>
  <v-app-bar app shrink-on-scroll prominent :src="getImageUrl">
    <v-container fluid class="d-flex justify-space-between align-center">
      <v-img contain max-width="120" :src="logoUrl"></v-img>
      <v-toolbar-title class="white--text text-uppercase">
        {{ title }}
      </v-toolbar-title>
      <v-btn color="#9E9E9E">¡Reserve ahora!</v-btn>
      <!-- TODO:
      Añadir opción de compartir en Facebook and x
      https://developers.facebook.com/docs/sharing/reference/share-dialog -->
    </v-container>
    <template v-slot:extension>
      <the-nav-bar></the-nav-bar>
    </template>
  </v-app-bar>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";

export default {
  name: "TheHeader",
  components: {
    TheNavBar,
  },
  data() {
    return {
      title: "Titulo de viaje",
      logoUrl: require("@/assets/logo/wondella-logo.png"),
    };
  },
  computed: {
    getImageUrl() {
      return this.$route.meta.imageUrl;
    },
  },
};
</script>

<style scoped>
.v-btn {
  color: white;
}
</style>
