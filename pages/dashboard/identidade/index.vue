<script>
import { useOrganizationStore } from "@/store/organization";

export default {
  layout: "dashboard",
  setup() {
    const organization = useOrganizationStore();
    return { organization };
  },
  head() {
    return {
      title: "Identidade",
    };
  },
  mounted() {
    if (!this.organization.fetched) this.organization.fetchOrganization();
  },
};
</script>

<template>
  <div class="page">
    <PartialsPageTitle
      title="Identidade Organizacional"
      link="./identidade/editar"
    />
    <section id="identidade">
      <b-container v-if="!organization.fetched">
        <b-alert show variant="warning">
          Carregando dados...
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </b-alert>
      </b-container>
      <b-container v-else>
        <b-row class="mb-4" align-v="center">
          <b-col col lg="3" class="text-center">
            <b-img center src="https://placehold.co/200x180" rounded alt="" />
          </b-col>
          <b-col>
            <h2>{{ organization.name }}</h2>
            <p>Vigência do planejamento</p>
            <b-card>
              <b-card-text>
                Ano de início: 2022<br />
                Ano de fim: 2030
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="mb-4">
            <h2>Missão</h2>
            <b-card>
              <b-card-text>
                {{ organization.mission }}
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" class="mb-4">
            <h2>Visão</h2>
            <b-card>
              <b-card-text>
                {{ organization.vision }}
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" class="mb-4">
            <h2>Valores</h2>
            <b-card>
              <b-card-text>
                {{ organization.values }}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<style>
#identidade {
  padding: 30px 0;
}

.card {
  border-radius: 10px;
}
</style>
