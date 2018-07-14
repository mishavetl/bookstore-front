<template>
  <div>
    <h1>Catalogue</h1>
  </div>
</template>

<script>
  import CategoryService from '@/services/CategoryService';

  export default {
    name: 'Catalogue',
    mounted () {
      CategoryService.get(this.$store, this.$i18n)
        .then(response => this.$store.commit('setCategories', response.data))
        .catch(error => {
          this.$store.commit('setApplicationError', 'Categories ' + error.response.data.error);
        });
    },
  };
</script>

<style scoped>

</style>
