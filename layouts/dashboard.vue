<template>
  <div class="app">
    <PartialsMenu />
    <Nuxt />
    <PartialsFooter />
  </div>
</template>

<style>
/* activate font ligatures */
:root{
  font-variant-ligatures: contextual;
}

.btn {
  padding: 10px 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
}
</style>
