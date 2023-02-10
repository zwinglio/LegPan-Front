import { defineStore } from 'pinia'

export const usePlanStore = defineStore('plan', {
  state: () => ({
    plan: null,
    fetched: false
  }),
  getters: {
    get_objectives () {
      const objectives = this.plan.flatMap(perspective => perspective.objectives
      )
      return objectives
    },
    get_perspectives () {
      const perspectives = this.plan.map(perspective => ({
        id: perspective.id,
        name: perspective.name
      }))
      return perspectives
    }
  },
  actions: {
    async fetchPlan () {
      await this.$nuxt.$axios
        .$get('/api/perspectives')
        .then(({ perspectives }) => {
          this.plan = perspectives

          setTimeout(() => {
            this.fetched = true
          }, 1000)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
