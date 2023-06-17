<template>
  <div>
    <img alt="Vue logo" :src="logoPath" />
    <HelloWorld msg="子应用 -- Vite+Vue@3.x" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const logoPath = "/assets/vite1/img/logo.png";

export default defineComponent({
  name: "Home",
  setup() {
    return { logoPath };
  },
  components: {
    HelloWorld,
  },
});
</script>

<style></style>
