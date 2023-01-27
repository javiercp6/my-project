<script setup>
import useProduct from "../composable/useProduct";

import CardCar from "../components/CardCar.vue"

const { car, priceTotal, carCount } = useProduct();

</script>

<template>

  <div class="" >
    <CardCar v-for="c in car" :key="c.id"
    :id="c.id"
    :name="c.title"
    :price="c.price"
    :img="c.image"
    :count="c.count"
    > 
    </CardCar> 
  </div>
  <div v-if="!carCount" class="flex justify-center py-20">
    <div class="text-2xl font-bold text-slate-600">
      No hay productos en el carrito
    </div>
  </div>
  <div class="flex justify-center pb-3">
    <div class="text-2xl font-bold text-slate-600">
      Total: ${{ priceTotal }}
    </div>
  </div>
</template>

<style scoped>
</style>
