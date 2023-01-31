<script>
export default {
  data () {
    return {}
  }
}
</script>

<template>
  <section id="menu" class="bg-dark py-3">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar active-class="active">
            <b-navbar-brand>
              <img src="~/assets/img/logo_light.svg" alt="Logo LegPlan">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" />

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item
                  to="/dashboard"
                  :class="{ active: $route.name === 'dashboard' }"
                  :active="$route.name === 'dashboard'"
                  right
                >
                  Dashboard
                </b-nav-item>
                <b-nav-item
                  to="/dashboard/identidade"
                  :active="$route.name === 'dashboard-identidade'"
                  right
                >
                  Identidade Organizacional
                </b-nav-item>
                <b-nav-item
                  to="/dashboard/mapa"
                  :active="$route.name === 'dashboard-mapa'"
                  right
                >
                  Mapa Estratégico
                </b-nav-item>
                <b-nav-item
                  to="/dashboard/gerenciar"
                  :active="$route.name === 'dashboard-gerenciar'"
                  right
                >
                  Gerenciar Plano
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style scoped>
.nav-link {
  color: #fff !important;
}
.active {
  color: var(--yellow) !important;
  font-weight: bold;
}
</style>
