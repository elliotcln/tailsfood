<template>
  <main id="main" class="">
    <section style="height: 75vh; max-height:750px;" class="relative">
      <div
        class="absolute z-0 bg-square w-full lg:w-10/12 h-full bg-gray-900 top-0 overflow-hidden lg:rounded-br-2xl"
      >
        <img
          src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
            <img src="https://images.pexels.com/photos/2159074/pexels-photo-2159074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="rounded-lg lg:rounded-3xl shadow lg:shadow-2xl" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- menu section -->
    <section class="relative py-12 lg:py-20">
      <div class="container">
        <h2 id="card-title" class="text-center">La carte du restaurant</h2>
        <h3 class="text-indigo-500 text-center">Des produits frais et locaux dans votre assiette</h3>
        <ul tabindex="0" aria-label="Raccourcis carte du restaurant" class="w-full max-w-2xl mx-auto mt-8 lg:mt-12 grid gap-4 grid-cols-2">
          <li class="group hover:shadow-xl relative col-span-2 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-xl h-40">
            <img class="absolute h-full w-full inset-x-0 inset-y-0 object-cover pointer-events-none opacity-0 group-hover:opacity-40 rounded-xl" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
            <a href="" class="relative flex place-items-center h-full justify-center px-3 p-2 text-center">
              <div class="text-xl font-semibold">Pizzas <small class="block">À partir de 9,50$</small></div>
            </a>
          </li>
          <li class="group hover:shadow-xl relative col-span-1 bg-gray-900 text-white rounded-xl h-40">
            <img class="absolute h-full w-full inset-x-0 inset-y-0 object-cover pointer-events-none opacity-0 group-hover:opacity-40 rounded-xl" src="https://images.pexels.com/photos/1580464/pexels-photo-1580464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
            <a href="" class="relative flex flex-col place-items-center h-full justify-center px-3 p-2 text-center space-y-2">
              <div class="w-full text-center"><span class="inline-block px-2 py-1 bg-indigo-500 text-white rounded-full text-xs tracking-wide">Recommandées</span></div>
              <div class="text-xl font-semibold">Tartines <small class="block">À partir de 9,50$</small></div>
            </a>
          </li>
          <li class="group hover:shadow-xl relative col-span-1 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-xl h-40">
            <img class="absolute h-full w-full inset-x-0 inset-y-0 object-cover pointer-events-none opacity-0 group-hover:opacity-40 rounded-xl" src="https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
            <a href="" class="relative flex place-items-center h-full justify-center px-3 p-2 text-center">
              <div class="text-xl font-semibold">Pastas <small class="block">À partir de 9,50$</small></div>
            </a>
          </li>
        </ul>
        <div class="text-center">
          <nuxt-link to="/" class="btn btn--indigo text-white mt-8 lg:mt-12">Voir toute la carte</nuxt-link>
        </div>
      </div>
    </section>

    <!-- hours section -->
    <section class="relative py-12 lg:py-20 bg-gray-100">
      <div class="container max-w-4xl">
        <h2 id="hours_title">Nos horaires d'ouverture</h2>
        <ul tabindex="0" aria-labelledby="hours_title" class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mt-8 lg:mt-12">
          <li><strong>Lundi et mardi</strong><span class="block text-gray-400 space-x-1">Fermé</span></li>
          <li><strong>Du mercredi au samedi</strong><span class="block text-gray-400">De 11:00 à 15:00 et de 18:30 à 21:00</span></li>
          <li><strong>Dimanche</strong><span class="block text-gray-400">De 11:00 à 15:00</span></li>
        </ul>
      </div>
    </section>

    <!-- photos section -->
    <section class="relative py-12 lg:py-20">
      <div class="container max-w-4xl">
          <div class="grid grid-cols-2">
            <h2 class="col-span-2">Galerie photos</h2>
            <h3 class="col-span-1 text-gray-500">Retrouvez toutes les photos sur <a href="#" target="_blank" class="underline text-indigo-500">Instagram</a></h3>
          </div>
          <div class="mt-8 lg:mt-12 grid grid-cols-2 grid-rows-2 grid-flow-col gap-4">
            <img class="rounded-lg lg:rounded-3xl transform" src="https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
            <img class="rounded-lg lg:rounded-3xl transform" src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
            <img class="rounded-lg lg:rounded-3xl transform -translate-y-1/4" src="https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="">
            <img class="rounded-lg lg:rounded-3xl transform -translate-y-1/4" src="https://images.pexels.com/photos/3892468/pexels-photo-3892468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </div>
          <!-- <div class="mt-8 md:mt-12">
            <a href="#" target="_blank" class="btn text-indigo-500 font-semibold">Aller sur Instagram</a>
          </div> -->
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>