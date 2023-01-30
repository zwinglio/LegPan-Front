<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section id="page-title">
    <b-container>
      <b-row align-h="between" align-v="center">
        <b-col>
          <h1>{{ title }}</h1>
        </b-col>
        <b-col col lg="2">
          <b-button variant="warning" :to="link">Editar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style>
#page-title {
  background-color: #fffefb;
  padding: 2rem 0;
  border-bottom: #ffb703 5px solid;
}

#page-title button {
  width: 100%;
}

#page-title h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
}

@media (max-width: 415px) {
  #page-title {
    padding: 2rem 0;
  }
  #page-title button {
    margin-top: 10px;
  }
}
</style>
