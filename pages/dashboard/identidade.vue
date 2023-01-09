<script>
import { useOrganizationStore } from "@/store/organization";

export default {
  setup() {
    const organization = useOrganizationStore();
    return { organization };
  },
  layout: "dashboard",
  head() {
    return {
      title: "Identidade",
    };
  },
};
</script>

<template>
  <div class="identidade">
    {{ organization.mission }}
  </div>
</template>
