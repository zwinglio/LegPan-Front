<template>
    <h1>


 {{ nome }}
    </h1>
</template>

<script>
export default {
    data() {
        return {
            "nome" : this.$route.param.about,
        }
    }
}
</script>