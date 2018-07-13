<template>
  <div/>
</template>

<script>
  import BookService from '@/services/BookService';

  export default {
    name: 'Catalogue',
    mounted () {
      this.$store.commit('setBooks', BookService.get(this.$store, this.$i18n));
    },
  };
</script>

<style scoped>

</style>
