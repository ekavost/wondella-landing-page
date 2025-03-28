<template>
  <div>
    <v-btn @click="$router.push({ name: 'about' })">Entrar</v-btn>
    <h1>Página Inicial</h1>
  </div>
</template>

<script>
export default {
  name: "home-view",
};
</script>
