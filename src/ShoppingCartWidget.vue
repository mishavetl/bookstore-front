<template>
  <b-navbar-nav>
    <b-nav-item
      v-b-modal.shoppingCartModal
      class="shop-link"
      @click.stop>
      <font-awesome-icon
        class="shop-icon"
        icon="shopping-bag"/>
      <span class="shop-quantity">3</span>
    </b-nav-item>
    <b-modal
      id="shoppingCartModal"
      ref="shoppingCartModal"
      hide-footer>
      <shopping-cart @exit="hideShoppingCartModal"/>
    </b-modal>
  </b-navbar-nav>
</template>

<script>
  import ShoppingCart from './components/ShoppingCart';

  export default {
    name: 'ShoppingCartWidget',
    components: {ShoppingCart},
    methods: {
      hideShoppingCartModal () {
        this.$refs.shoppingCartModal.hide();
      },
    },
  };
</script>

<style scoped>

</style>
