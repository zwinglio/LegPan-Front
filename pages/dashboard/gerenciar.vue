<script>
import { usePlanStore } from '@/store/plan'

export default {
  layout: 'dashboard',
  setup () {
    const plan = usePlanStore()
    return { plan }
  },
  head () {
    return {
      title: 'Gerenciar Plano'
    }
  },
  mounted () {
    if (!this.plan.fetched) {
      this.plan.fetchPlan()
    }
  }
}
</script>

<template>
  <div class="page">
    <PartialsPageTitle title="Gerenciar Plano" />
    <section id="gerenciar">
      <b-container v-if="!plan.fetched" class="mt-4">
        <b-alert show variant="warning">
          Carregando dados...
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
        </b-alert>
      </b-container>
      <b-container v-else>
        <GerenciarObjective
          v-for="objective in plan.get_objectives"
          :key="objective.id"
          :objective="objective"
        />
      </b-container>
    </section>
  </div>
</template>

<style>
.perspective-title {
  color: #ffffff;
  background: #ffb703;
  border-radius: 15px;
  padding: 5px 20px;
  border: 2px solid rgba(255, 183, 3, 0.38);
}

button {
  outline: none;
  padding: 10px 10px !important;
}

/** rotate arrow */
.arrow-open {
  transform: rotate(0deg);
}

.rotate {
  transform: rotate(-90deg);
}
</style>
