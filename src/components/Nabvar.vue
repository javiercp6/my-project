<template>
    <div class="bg-indigo-600">
      <nav
        class="
          container
          px-6
          py-2
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-100
              md:text-2xl
              hover:text-indigo-400
            "
            >Logo
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 cursor-pointer
          "
        >
          <router-link to="/"> Inicio</router-link>
          <router-link to="/producto"> Productos</router-link>
          <router-link to="/carrito"> Carrito <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-red-500">{{ carCount }}</span></router-link>
        </ul>
        
      </nav>
    </div>
    <div>
      <router-view />
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import useProduct from "../composable/useProduct";
  import { RouterLink, RouterView } from 'vue-router'
 
  const { carCount } = useProduct();
  let showMenu = ref(false);
  const toggleNav = () => (showMenu.value = !showMenu.value);
  </script>

  <style scoped>
  a {
    color: #fff;
  }
  a:hover {
    opacity: .5;
  }
  .router-link-exact-active{
    color: rgb(129 140 248);
  }
  </style>