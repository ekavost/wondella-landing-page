<template>
  <v-tabs>
    <v-tab :to="{ name: 'home' }">Inicio</v-tab>
    <v-tab :to="{ name: 'about' }">Resumen</v-tab>
    <v-tab :to="{ name: 'destinations' }">Destinos</v-tab>
    <v-tab :to="{ name: 'accommodation' }">Alojamiento</v-tab>
    <v-tab :to="{ name: 'information' }">Información Diaria</v-tab>
    <v-tab :to="{ name: 'map' }">Mapa</v-tab>
    <v-tab :to="{ name: 'transport' }">Transporte</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "the-nav-bar",
};
</script>
