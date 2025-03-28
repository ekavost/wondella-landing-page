<template>
  <v-container
    fluid
    :style="{ backgroundImage: `url(${imageUrl})` }"
    class="container d-flex flex-column justify-space-between px-md-8 px-lg-12"
  >
    <div class="pa-sm-5 pa-md-8 pa-lg-12">
      <p v-cloak class="text-end text-uppercase">{{ tour.destination }}</p>
    </div>
    <v-card
      rounded
      color="#75757599"
      class="d-flex align-center mx-sm-3 mx-md-7 mx-lg-12 mx-xl-16 mb-md-6 mb-lg-10 pa-4"
    >
      <div>
        <v-card-title v-cloak class="text-uppercase">{{
          tour.title
        }}</v-card-title>
        <v-card-subtitle v-cloak>{{ tour.description }}</v-card-subtitle>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-card-text v-cloak class="py-0">
          {{ formattedDuration }}
        </v-card-text>
        <div class="vertical-line mx-3"></div>
        <v-btn :to="{ name: 'about' }" class="mx-2" text-uppercase
          >entrar</v-btn
        >
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "home-view",
  data() {
    return {
      tour: {
        destination: "Destination",
        title: "Título de viaje",
        description: "Descripción",
        duration: 5,
      },
      imageUrl: require("@/assets/images/landscape.jpg"),
    };
  },
  computed: {
    formattedDuration() {
      return `${this.tour.duration} noches`;
    },
  },
};
</script>

<style scoped>
* {
  color: white;
  font-weight: normal;
}
.container {
  height: 100vh;
  background-size: cover;
}
.vertical-line {
  border-left: 1px solid white;
  align-self: stretch;
}
</style>
