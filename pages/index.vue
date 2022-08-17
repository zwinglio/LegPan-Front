<template>
  <div class="">
    <h1>Olá</h1>
    <NuxtLink to="about">Sobre</NuxtLink>
    <HeadingLogout />
  </div>
</template>

<script>
import HeadingLogout from '../components/HeadingLogout.vue';
export default {
    name: "IndexPage",
    components: { HeadingLogout }
}
</script>
