<script setup></script>

<template>
  <section id="hero" className="sm:py-8 min-h-screen flex items-center relative z-40">
    <div className="container max-lg:text-center lg:flex items-center">
      <div className="md:w-full max-md:mb-10">
        <h1 className="text-8xl xl:text-[10rem] mb-2">
          Happy <span>21<sup class="text-3xl font-semibold text-brand-pink-dark md:text-5xl">st</sup></span> Birthday
        </h1>
        <h2 className="mb-4 text-3xl text-brand-pink-dark font-sans md:text-4xl">Raden Sylva Adliani</h2>
      </div>
      <div data-aos="fade-left" data-aos-duration="2500" className="w-full lg:flex items-center justify-center">
        <img src="/img/panah-bawah.png" class="mx-auto mb-4 lg:hidden" alt="" />
        <img src="/img/panah-kanan.png" class="mx-auto mr-4 max-lg:hidden" alt="" />
        <div className="max-w-xs md:max-w-md aspect-square mx-auto">
          <img src="/img/sylva.jpg" alt="" className="object-cover w-full border-4 rounded-md border-brand-pink-dark " />
        </div>
      </div>
    </div>
  </section>
</template>
