<template>
  <main id="main" class="">
    <section style="height: 75vh; max-height:750px;" class="relative">
      <div
        class="absolute z-0 bg-square w-full lg:w-10/12 h-full bg-gray-900 top-0 overflow-hidden lg:rounded-br-2xl"
      >
        <img
          src="../static/pexels-valeria-boltneva-1833349.jpg"
          class="w-full h-full object-cover opacity-10"
          alt=""
        />
      </div>
      <div class="container h-full relative flex place-items-center">
        <div class="pt-20 text-white">
          <h1>Chick fil A - Restaurant</h1>
          <h2 class="mt-4 opacity-75">
            Une cuisine fraîche avec des produits locaux et de saison
          </h2>
          <div class="group mt-5 space-y-1 space-x-1">
            <nuxt-link to="/" class="btn btn--indigo text-white"
              >Découvrir notre carte</nuxt-link
            >
            <nuxt-link to="/" class="btn border-white text-white"
              >Réserver</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- restaurant section  -->
    <section class="relative py-12 lg:py-20">
      <div
        class="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-gray-100"
      ></div>
      <div class="container relative">
        <div class="grid md:grid-cols-7 gap-6 lg:gap-8 items-center">
          <div class="md:col-span-3">
            <h2>Chick Fil A - Qui sommes-nous ?</h2>
            <h3 class="text-indigo-500">
              Restaurant familial & à échelle humaine
            </h3>
            <p class="mt-8 lg:mt-12 leading-loose">
              Nisi sint nostrud cillum do cillum incididunt exercitation eu
              occaecat Lorem magna aliquip aute pariatur. Dolor amet proident
              cupidatat occaecat minim ipsum mollit reprehenderit commodo
              consectetur excepteur. Exercitation laborum sint veniam ad irure
              exercitation cillum.
            </p>
            <nuxt-link class="btn border-indigo-500 text-indigo-500 mt-8" to="">En savoir plus</nuxt-link>
          </div>
          <div class="md:col-span-4">
            <img src="../static/pexels-mateusz-dach-3660229.jpg" class="rounded-lg lg:rounded-3xl shadow lg:shadow-2xl" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- menu section -->
    <section class="relative py-12 lg:py-20">
      <div class="container">
        <h2 class="text-center">La carte du restaurant</h2>
        <h3 class="text-indigo-500 text-center">Des produits frais et locaux dans votre assiette</h3>
        <ul class="w-full max-w-2xl mx-auto mt-8 lg:mt-12 grid gap-4 md:grid-cols-2">
          <li class="md:col-span-2 bg-gray-100 hover:bg-gray-50 rounded-xl h-40">
            <a href="" class="flex place-items-center h-full justify-center px-3 p-2 text-center">
              <div class="text-xl font-semibold">Pizzas <small class="block">À partir de 9,50$</small></div>
            </a>
          </li>
          <li class="md:col-span-1 bg-gray-100 hover:bg-gray-50 rounded-xl h-40">
            <a href="" class="flex place-items-center h-full justify-center px-3 p-2 text-center">
              <div class="text-xl font-semibold">Tartines <small class="block">À partir de 9,50$</small></div>
            </a>
          </li>
          <li class="md:col-span-1 bg-gray-100 hover:bg-gray-50 rounded-xl h-40">
            <a href="" class="flex place-items-center h-full justify-center px-3 p-2 text-center">
              <div class="text-xl font-semibold">Pâtes <small class="block">À partir de 9,50$</small></div>
            </a>
          </li>
        </ul>
        <div class="text-center">
          <nuxt-link to="/" class="btn btn--indigo text-white mt-8 lg:mt-12">Voir toute la carte</nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>