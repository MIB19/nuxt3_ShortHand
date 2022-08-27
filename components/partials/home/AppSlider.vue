<template>
  <div
    class="w-full flex justify-center items-center bg-yellow-50 h-slider-sm md:h-slider-md xl:h-slider-xl"
  >
    cobak
    <!-- <client-only>
      <Flicking :options="options" :plugins="plugins">
        <div
          v-for="(item, i) in appSliders"
          :key="i"
          class="relative overflow-hidden w-full h-slider-3xs mx-1 object-contain md:rounded-xl 2xs:h-slider-2xs 2xs:w-slider-2xs xs:h-slider-xs xs:w-slider-xs sm:h-slider-sm sm:w-slider-sm md:w-slider-md md:h-slider-md lg:h-slider-lg lg:w-slider-lg xl:h-slider-xl xl:w-slider-xl bg-gray-400"
        >
          <img
            class="absolute top-0 w-full h-slider-3xs object-cover object-top 2xs:h-slider-2xs 2xs:w-slider-2xs xs:h-slider-xs xs:w-slider-xs sm:h-slider-sm sm:w-slider-sm md:w-slider-md md:h-slider-md lg:h-slider-lg lg:w-slider-lg xl:h-slider-xl xl:w-slider-xl"
            :src="item.img"
          />
        </div>
        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </client-only> -->
  </div>
</template>
<script>
// import Flicking from "@egjs/vue3-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
export default {
  name: "HomePage",
  components: {
    // Flicking,
  },
  data() {
    return {
      options: {
        align: "center",
        circular: true,
      },
      plugins: [
        new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
        new Pagination({ type: "bullet" }),
      ],
      appSliders: [
        { img: "/TernaknesiaSlider.png" },
        { img: "/TernaknesiaSlider.png" },
        { img: "/TernaknesiaSlider.png" },
      ],
    };
  },
};
// const getScreenWidth = computed(() =>
//   window.innerWidth > 0 ? window.innerWidth : screen.width
// );
// const heightSlider = computed(() => getScreenWidth / 1.51);
// const mobileScreen = computed(
//   () => window.matchMedia("(max-width: 767px)").matches
// );
// const options = ref({
//   align: "center",
//   circular: true,
// });
// const appSliders = ref([
//   { img: "/TernaknesiaSlider.png" },
//   { img: "/TernaknesiaSlider.png" },
//   { img: "/TernaknesiaSlider.png" },
// ]);
// const plugins = ref([
//   new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
//   new Pagination({ type: "bullet" }),
// ]);
</script>
<style>
@import "@egjs/flicking/dist/flicking-inline.css";
@import "@egjs/flicking-plugins/dist/flicking-plugins.css";
@import "@egjs/flicking-plugins/dist/pagination.css";
</style>
