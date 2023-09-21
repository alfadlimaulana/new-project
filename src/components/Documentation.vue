<script setup>
import { onMounted, ref, reactive } from "vue";
import { PhPlus } from "@phosphor-icons/vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import FsLightbox from "fslightbox-vue/v3";

const mainOptions = {
  type: "fade",
  perPage: 1,
  perMove: 1,
  pagination: false,
  mediaQuery: "min",
  width: "100%",
  height: "422px",
  breakpoints: {
    1024: {
      width: "80%",
    },
  },
};

const thumbOptions = {
  direction: "ttb",
  perPage: 4,
  perMove: 1,
  gap: "8px",
  pagination: false,
  width: "100%",
  height: "422px",
  isNavigation: true,
  mediaQuery: "min",
  breakpoints: {
    1024: {
      width: "20%",
    },
    1536: {
      perPage: 3,
    },
  },
};

const main = ref(null);
const thumbs = ref(null);
const lightbox = reactive({
  toggler: false,
  slide: 1,
});

onMounted(() => {
  const thumbsSplide = thumbs.value?.splide;
  if (thumbsSplide) {
    main.value?.sync(thumbsSplide);
  }
});

const getImages = () => {
  const arr = [];
  for (let i = 1; i < 7; i++) {
    arr.push(`/img/dokumentasi/${i}.jpg`);
  }

  return arr;
};

const openLightboxOnSlide = (index) => {
  lightbox.slide = index;
  lightbox.toggler = !lightbox.toggler;
};
</script>

<template>
  <section id="documentation" class="py-12">
    <div class="container items-center gap-16 max-lg:text-center lg:flex">
      <div class="-translate-x-4 pattern-diagonal-lines-sm text-brand-pink-dark">
        <div class="flex w-full gap-4 translate-x-4 -translate-y-4">
          <Splide :options="mainOptions" ref="main">
            <SplideSlide v-for="(image, index) in getImages()" :key="index" @click="openLightboxOnSlide(index + 1)">
              <img :src="image" class="object-cover object-center w-full h-full rounded-lg" />
            </SplideSlide>
          </Splide>

          <Splide :options="thumbOptions" ref="thumbs" class="max-lg:hidden">
            <SplideSlide class="[&.is-active]:!border-brand-pink-dark rounded-lg" v-for="(image, index) in getImages()" :key="index">
              <button class="w-full h-full">
                <img :src="image" class="object-cover w-full h-full rounded-lg cursor-ceobject-center-pointer object" />
              </button>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
    <FsLightbox :toggler="lightbox.toggler" :slide="lightbox.slide" :sources="getImages()" />
  </section>
</template>
