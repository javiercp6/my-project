<script setup>
import { ref } from 'vue'
import useProduct from "../composable/useProduct";

defineProps({
  id: Number,
  name: String,
  img: String,
  price: Number,
  count: Number,
})

const { addProductCard, addCountProductCard, restCountProductCard } = useProduct()

</script>

<template>
    <article class="flex items-start space-x-6 p-6 ">
      <img :src="img" alt="" width="60" height="88" class="flex-none rounded-md bg-slate-100" />
      <div class="min-w-0 relative flex-auto">
        <h2 class="font-semibold text-slate-300 truncate pr-20">{{ name}}</h2>
        <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div class="absolute top-0 right-0 flex items-center space-x-1">    
            <button class="rounded-full p-0 w-6" @click="addCountProductCard(id)">+</button>
            <dd>{{ count }}</dd>
            <button class="rounded-full p-0 w-6" @click="restCountProductCard(id)">-</button>
          </div>
          <div class="flex-none  mt-2 font-normal">
            <dt class="sr-only">Cast</dt>
            <dd class="text-slate-400">{{ price }}</dd>           
          </div>
        </dl>
      </div>
    </article>
  </template>

<style scoped>

</style>
