<script setup>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Wishes from "./components/Wishes.vue";
import Documentation from "./components/Documentation.vue";
import Welcome from "./components/Welcome.vue";
import Music from "./components/Music.vue";
import "pattern.css/dist/pattern.min.css";
import { watch, ref, onMounted } from "vue";
import $ from "jquery";

const welcome = ref(null);
const mainContainer = ref(null);
const opened = ref(false);

const btnClicked = () => {
  opened.value = true;
};

var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      r_size +
      "px;height:" +
      r_size +
      "px;left:" +
      r_left +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      r_bg +
      ",1);-webkit-animation:love " +
      r_time +
      "s ease;-moz-animation:love " +
      r_time +
      "s ease;-ms-animation:love " +
      r_time +
      "s ease;animation:love " +
      r_time +
      "s ease'></div>"
  );

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      "px;height:" +
      (r_size - 10) +
      "px;left:" +
      (r_left + r_num) +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      (r_bg + 25) +
      ",1);-webkit-animation:love " +
      (r_time + 5) +
      "s ease;-moz-animation:love " +
      (r_time + 5) +
      "s ease;-ms-animation:love " +
      (r_time + 5) +
      "s ease;animation:love " +
      (r_time + 5) +
      "s ease'></div>"
  );

  $(".heart").each(function () {
    var top = $(this)
      .css("top")
      .replace(/[^-\d\.]/g, "");
    var width = $(this)
      .css("width")
      .replace(/[^-\d\.]/g, "");
    if (top <= -100 || width >= 150) {
      $(this).detach();
    }
  });
}, 500);

console.log("app");
</script>

<template>
  <div ref="mainContainer" class="relative overflow-hidden font-sans bg-brand-pink-base text-brand-blue" :class="{ 'h-screen': !opened }">
    <div ref="welcome" class="transition duration-[2000ms] fixed w-full z-50" :class="{ '-translate-y-full': opened }">
      <Welcome :btn-clicked="btnClicked" />
    </div>
    <div class="relative bg-brand-pink-base">
      <div class="z-0 bg_heart"></div>
      <Hero />
      <About />
    </div>
    <div class="bg-brand-pink-light">
      <Wishes />
      <Documentation />
    </div>
    <Music :opened="opened" class="max-md:hidden" />
  </div>
</template>
