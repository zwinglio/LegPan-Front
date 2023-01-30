import { defineStore } from "pinia";

export const useOrganizationStore = defineStore("organization", {
  state: () => ({
    name: "LegPlan",
    mission: "To make the world a better place",
    vision: "To be the best organization in the world",
    values: ["Integrity", "Excellence", "Teamwork", "Innovation", "Passion"],
    fetched: false, 
  }),
  actions: {
    async fetchOrganization() {
      console.log("Fetching organization")

      const response = await this.$nuxt.$axios
        .$get("/api/company",)
        .then(({ company }) => {
            this.name = company.name;
            this.mission = company.mission;
            this.vision = company.vision;
            this.values = company.values;

            setTimeout(() => {
                this.fetched = true;
            }, 1000);

            console.log("organization fetched");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
