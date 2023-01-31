<script>
import { useOrganizationStore } from "@/store/organization";

export default {
  layout: "dashboard",
  head() {
    return {
      title: "Editar Identidade Organizacional",
    };
  },
  setup() {
    const organization = useOrganizationStore();
    return { organization };
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    if (!this.organization.fetched) this.organization.fetchOrganization();
    this.organization.fetched = false;
  },
  methods: {
    updateOrganization() {
      this.loading = true;
      this.organization.updateOrganization(this.organization);
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/dashboard/identidade");
      }, 2000);
    },
  },
};
</script>

<template>
  <div>
    <PartialsPageTitle
      title="Editar Identidade Organizacional"
      link="/dashboard/identidade"
      action="Voltar"
      back
    />
    <section id="editar-identidade">
      <b-container class="py-3 mt-2">
        <b-row>
          <b-col lg="4" class="text-center">
            <b-img center src="https://placehold.co/200x180" rounded alt="" />
            <b-button variant="secondary" class="mt-3">📷 Mudar Foto</b-button>
          </b-col>
          <b-col>
            <form action="#">
              <b-form-group label="Nome da organização">
                <b-form-input v-model="organization.name" />
              </b-form-group>
              <b-form-group label="Missão">
                <b-form-textarea v-model="organization.mission" />
              </b-form-group>
              <b-form-group label="Visão">
                <b-form-textarea v-model="organization.vision" />
              </b-form-group>
              <b-form-group label="Valores">
                <b-form-textarea v-model="organization.values" />
              </b-form-group>
              <b-form-group label="Ano de início">
                <b-form-input v-model="organization.start_date" />
              </b-form-group>
              <b-form-group label="Ano de fim">
                <b-form-input v-model="organization.end_date" />
              </b-form-group>
              <b-button
                variant="warning mt-4"
                class="py-3"
                type="submit"
                block
                @click.prevent="updateOrganization()"
              >
                Salvar
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm ml-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              </b-button>
            </form>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<style>
#editar-identidade .btn-warning {
  color: #362700;
}

#editar-identidade .btn-secondary {
  font-weight: 400;
}
</style>
