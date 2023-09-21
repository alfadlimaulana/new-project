<script setup>
import { ref } from "vue";
import { PhPlus } from "@phosphor-icons/vue";
import Confetti from "./svg/Confetti.vue";

defineProps({
  //   msg: String,
});

const wishes = [
  "Sehat Selalu",
  "Berkah Umurnya",
  "Makin Pinter",
  "Makin Soleh",
  "Berlimpah Rezekinya",
  "Berkah Rezekinya",
  "Bahagia Selalu",
  "Keselamatan Dunia Akhirat",
  "Diampuni Dosa-dosanya",
  "Dilancarkan Skripsiannya",
  "Lulus 3,5 Tahun",
  "Lulus Cumlaude",
  "Dimudahkan Segala Urusannya",
];
const counter = ref(1);
const giftModal = ref(false);
const increment = () => {
  counter.value++;
};
const toggleModal = () => {
  giftModal.value = !giftModal.value;
};
</script>

<template>
  <section id="wishes" className="py-12">
    <div className="container max-lg:text-center flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
      <div class="w-full">
        <h1 className="text-6xl lg:text-7xl">Wishes <span v-if="counter == wishes.length">& Gift</span></h1>
        <p class="mb-4 md:text-lg">Ini harapan aku buat kamu. Kalo kurang tinggal klik "+". <span v-if="counter == wishes.length">Tapi ucapan kurang lengkap tanpa kado gasihh..</span></p>
        <div v-if="counter == wishes.length">
          <button class="hover:scale-110">
            <img src="/img/kado.png" alt="" class="w-20 h-auto" @click="toggleModal" />
          </button>
        </div>
      </div>
      <div class="lg:w-full flex max-lg:justify-center flex-wrap gap-2.5">
        <div v-for="i in counter" class="bg-brand-pink-base px-5 py-2.5 rounded-full">{{ wishes[i - 1] }}</div>
        <div v-if="counter < wishes.length" @click="increment" class="p-4 rounded-full cursor-pointer bg-brand-pink-base"><PhPlus /></div>
        <div v-else class="bg-brand-pink-base px-5 py-2.5 rounded-full">Pokonya doa terbaik buat kamu</div>
      </div>
    </div>
  </section>

  <div class="fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-[rgba(0,0,0,0.4)] grid place-items-center" :class="[giftModal ? 'block' : 'hidden']">
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative rounded-lg shadow bg-brand-pink-light">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 border-b rounded-t">
          <h3 class="text-4xl font-semibold text-gray-900">Earphone baruu!</h3>
          <button type="button" @click="toggleModal" class="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="relative p-6 space-y-6">
          <Confetti class="absolute w-44 left-10 max-sm:bottom-0" />
          <img src="/img/kado.png" alt="" class="block w-40 h-auto mx-auto" />
          <Confetti class="absolute bottom-0 transform sm:top-0 -scale-x-100 w-44 right-10" />
        </div>
        <!-- Modal footer -->
        <div class="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b">
          <button @click="toggleModal" type="button" class="text-white bg-brand-pink-dark hover:bg-brand-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Yeyy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
