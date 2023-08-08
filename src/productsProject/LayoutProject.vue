<template lang="">
  <main class="mainCon">
    <aside class="sideProducts">
      <ProductItems
        v-for="product in products"
        :key="product.id"
        :product="product"
        @sProduct="selectProduct"
      />
      <!-- {{ products }} -->
    </aside>
    <aside class="sideCart">
      <section>
        <CartItem
          v-for="product in selectedProduct"
          :key="product.id"
          :product="product"
        />
      </section>
      <section>
        <h2 v-fontSize.red.italic.bold.lg>Total: ${{ totalPrice }}</h2>
      </section>
    </aside>
  </main>
</template>

<script lang="ts" setup>
import { computed, ref, Ref } from "vue";
import { Product } from "./ts/products.model";
import ProductItems from "/src/productsProject/ProductItems.vue";
import CartItem from "./CartItem.vue";

const selectedProduct: Ref<Product[]> = ref([]);
const products = ref<Product[]>([]);

const fecthProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: Product[] = await res.json();
  console.log(data);
  products.value = data;
};

const selectProduct = (product: Product) => {
  selectedProduct.value.push(product);
};

const totalPrice = computed((): number => {
  let total = 0;
  selectedProduct.value.forEach((product) => {
    total += product.price;
  });
  return total;
});

fecthProducts();
</script>

<style lang="css">
.mainCon {
  display: flex;
  justify-content: center;
  width: 100%;
}
.sideProducts {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}
.sideCart {
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>
