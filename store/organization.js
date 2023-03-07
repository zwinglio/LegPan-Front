import { defineStore } from 'pinia'

export default defineStore('organization', {
  state: () => ({
    organization: {
      name: 'LegPlan',
      mission: 'To make the world a better place',
      vision: 'To be the best organization in the world',
      values: ['Integrity', 'Excellence', 'Teamwork', 'Innovation', 'Passion'],
      start_date: '2021-01-01',
      end_date: '2021-31-01',
      fetched: false
    }
  }),

  getters: {
    getEndYear (state) {
      return state.organization.end_date.split('-')[0]
    },
    getStartYear (state) {
      return state.organization.start_date.split('-')[0]
    }
  },

  actions: {
    async fetchOrganization () {
      console.log('Fetching organization')

      await this.$nuxt.$axios
        .$get('/api/company')
        .then(({ company }) => {
          this.organization.name = company.name
          this.organization.mission = company.mission
          this.organization.vision = company.vision
          this.organization.values = company.values
          this.organization.start_date = company.plan_start_date
          this.organization.end_date = company.plan_end_date

          setTimeout(() => {
            this.organization.fetched = true
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
