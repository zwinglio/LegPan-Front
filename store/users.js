import { defineStore } from 'pinia'

export default defineStore('users', {
  state: () => ({
    users: [],
    fetched: false
  }),

  actions: {
    async fetchUsers () {
      console.log('Fetching users')

      await this.$nuxt.$axios
        .$get('/api/users')
        .then(({ users }) => {
          this.users = users

          setTimeout(() => {
            this.fetched = true
          }, 1000)

          console.log('users fetched')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
