<template>
  <v-app>
    <the-header
      v-if="!$route.meta.hideHeader"
      :imgUrl="$route.meta.imageUrl"
    ></the-header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "app",
  components: {
    TheHeader,
  },
};
</script>
