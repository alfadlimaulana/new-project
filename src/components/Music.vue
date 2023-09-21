<script setup>
import { ref, onMounted, watch } from "vue";
import { PhSpeakerSimpleX } from "@phosphor-icons/vue";

const props = defineProps({
  opened: Boolean,
});

const muteBtn = ref(null);
const volumeSlider = ref(null);
const bgm = ref(null);

watch(props, () => {
  bgm.value.play();
});

onMounted(() => {
  bgm.value.currentTime = 40.5;
  bgm.value.volume = 0.5;
});

const setVolume = (e) => {
  const value = e.target.value;
  bgm.value.volume = value / 100;
};

const toggleSound = () => {
  bgm.value.muted = !bgm.value.muted;
};
</script>

<template>
  <div id="music" class="fixed bottom-6 right-6 z-40 group overflow-y-hidden pl-[6px]">
    <div class="relative z-10 transition-all bg-brand-blue border-2 border-brand-orange translate-y-[calc(100%+8px)] group-hover:translate-y-0 pattern-diagonal-lines-sm p-3 mb-2">
      <input ref="volumeSlider" @input="setVolume" type="range" orient="vertical" value="100" class="block mx-auto bg-gray-200 rounded-lg appearance-none cursor-pointer volume-slider" />

      <audio ref="bgm" loop>
        <source src="/audio/22.mp3" type="audio/wav" />
      </audio>
    </div>
    <div class="relative z-20">
      <button ref="muteBtn" @click="toggleSound" class="w-full p-3 text-base border-2 bg-brand-blue border-brand-orange"><PhSpeakerSimpleX weight="fill" class="text-xl text-brand-orange" /></button>
    </div>
  </div>
</template>
