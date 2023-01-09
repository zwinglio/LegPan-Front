import { defineStore } from 'pinia'

export const useOrganizationStore = defineStore('organization', {
    state: () => ({
        mission: 'To make the world a better place',
        vision: 'To be the best organization in the world',
        values: ['Integrity', 'Excellence', 'Teamwork', 'Innovation', 'Passion']
    })
})