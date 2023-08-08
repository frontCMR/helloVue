<template lang="">
  <article class="product">
    <figure class="product__img">
      <img :src="product.image" :alt="product.title" />
    </figure>
    <div class="product__info">
      <h3>{{ props.product.title }}</h3>
      <p>{{ props.product.price }}</p>
    </div>
    <button @click="selectProduct(product)">Add to cart</button>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "./ts/products.model";

export default defineComponent({
  name: "ProductItems",
  props: {
    product: {
      type: Object as () => Product,
    },
  },
  emits: ["sProduct"],
  setup(props, { emit }) {
    const selectProduct = (product: Product) => {
      emit("sProduct", product);
    };
    return {
      props,
      selectProduct,
    };
  },
});
</script>

<style lang="css">
.sideProducts {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
}
.product__img {
  width: 100%;
  height: 80%;
  overflow: hidden;
}
.product__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.product__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 12px;
}
</style>
