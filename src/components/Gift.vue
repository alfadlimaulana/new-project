<script setup>
import { ref } from "vue";
import { PhPlus } from "@phosphor-icons/vue";

defineProps({
  //   msg: String,
});

const wishes = ["Sehat Selalu", "Berkah Umurnya", "Makin Pinter", "Makin Soleh", "Berlimpah Rezekinya", "Berkah Rezekinya", "Bahagia Selalu", "Keselamatan Dunia Akhirat", "Diampuni Dosa-dosanya", "Dilancarkan Skripsiannya", "Lulus 3,5 Tahun", "Lulus Cumlaude", "Dimudahkan Segala Urusannya"];
const counter = ref(1);
const increment = () => {
  counter.value++;
};
</script>

<template>
  <section id="wishes" className="py-12">
    <div className="container max-lg:text-center flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
      <div class="w-full">
        <h1 className="text-6xl lg:text-7xl">Wishes</h1>
        <p class="md:text-lg">Wish dari aku, semoga kamu:</p>
      </div>
      <div class="lg:w-full flex max-lg:justify-center flex-wrap gap-2.5">
        <div v-for="i in counter" class="bg-brand-pink-base px-5 py-2.5 rounded-full">{{ wishes[i - 1] }}</div>
        <div v-if="counter < wishes.length" @click="increment" class="p-4 rounded-full cursor-pointer bg-brand-pink-base"><PhPlus /></div>
        <div v-else class="bg-brand-pink-base px-5 py-2.5 rounded-full">Pokonya doa terbaik buat kamu</div>
      </div>
    </div>
  </section>
</template>
