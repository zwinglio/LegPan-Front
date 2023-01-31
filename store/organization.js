import { defineStore } from 'pinia'

export const useOrganizationStore = defineStore('organization', {
  state: () => ({
    name: 'LegPlan',
    mission: 'To make the world a better place',
    vision: 'To be the best organization in the world',
    values: ['Integrity', 'Excellence', 'Teamwork', 'Innovation', 'Passion'],
    start_date: '2021-01-01',
    end_date: '2021-31-01',
    fetched: false
  }),
  getters: {
    get_end_year () {
      return this.end_date.split('-')[0]
    },
    get_start_year () {
      return this.start_date.split('-')[0]
    }
  },
  actions: {
    async fetchOrganization () {
      console.log('Fetching organization')

      await this.$nuxt.$axios
        .$get('/api/company')
        .then(({ company }) => {
          this.name = company.name
          this.mission = company.mission
          this.vision = company.vision
          this.values = company.values
          this.start_date = company.plan_start_date
          this.end_date = company.plan_end_date

          setTimeout(() => {
            this.fetched = true
          }, 1000)

          console.log('organization fetched')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    async updateOrganization () {
      console.log('Updating organization')

      await this.$nuxt.$axios
        .$put('/api/company', {
          name: this.name,
          mission: this.mission,
          vision: this.vision,
          values: this.values,
          plan_start_date: this.start_date,
          plan_end_date: this.end_date
        })
        .then(({ company }) => {
          console.log('organization updated')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
