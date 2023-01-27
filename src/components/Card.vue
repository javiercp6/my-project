<script setup>
import useProduct from "../composable/useProduct";

defineProps({
  id: Number,
  name: String,
  img: String,
  price: Number,
})

const { addProductCard } = useProduct()

</script>

<template>
  <div class="rounded border md:shadow w-full md:w-64 overflow-hidden">
  <div>
      <img class="imgCard"  :src="img" alt="card 1" />
  </div>

  <div class="px-4 py-4">
    <h3 class="font-semibold text-slate-300 mb-2 truncate">
      {{ name }}
    </h3>
    <div class="flex justify-between">
        <div class="text-left mt-2">    
           $ {{ price }}
        </div>
        <div class="text-right mt-2">
            <button @click="addProductCard(id)" class=" text-sm p-1 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                Agregar
            </button>
        </div>
    </div>
  </div>
</div>

</template>

<style scoped>
.imgCard{
  object-fit: cover;
  width:100%;
  height:200px;
}
</style>
