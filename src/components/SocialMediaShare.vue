<template>
  <div>
    <span class="text-uppercase">compartir: </span>
    <button @click="shareOnFacebook"><v-icon>mdi-facebook</v-icon></button>
    <!-- TODO: replace X with the official Icon -->
    <button @click="shareOnTwitter"><v-icon>mdi-alpha-x</v-icon></button>
  </div>
</template>

<script>
export default {
  methods: {
    shareOnFacebook() {
      const url = encodeURIComponent(window.location.href);
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    },
    shareOnTwitter() {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent("Mira esta página interesante:");
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    },
  },
};
</script>

<style scoped></style>
