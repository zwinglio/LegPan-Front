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
    action: {
      type: String,
      required: false,
      default: "Editar",
    },
    back: {
      type: Boolean,
      required: false,
      default: false,
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
          <b-button v-if="!back" variant="warning" :to="link">{{ action }}</b-button>
          <b-button v-if="back" variant="secondary" :to="link">{{ action}}</b-button>
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

#page-title .btn {
  width: 100%;
  padding: 10px 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
  color: #fff8e6;
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
