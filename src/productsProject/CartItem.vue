<template lang="">
  <article class="cartItem">
    <figure class="cartItem__img">
      <img :src="props.product.image" alt="" />
    </figure>
    <div class="cartItem__info">
      <h3>{{ props.product.title }}</h3>
      <p>{{ props.product.price }}</p>
    </div>
  </article>
</template>
<script lang="ts" setup>
import { Product } from "./ts/products.model";

// eslint-disable-next-line no-undef
const props = defineProps<{ product: Product }>();
</script>
<style lang="css">
.cartItem {
  display: flex;
  align-items: center;
  height: 200px;
}

.cartItem__img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
}
.cartItem__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cartItem__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 12px;

  margin-left: 20px;
}
</style>
