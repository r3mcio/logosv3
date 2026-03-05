<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="w-full font-sans" style="background: #060807; border-top: 1px solid rgba(200,146,42,0.12);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <!-- Single compact row -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">

        <!-- Logo + brand name inline -->
        <RouterLink to="/" class="flex items-center gap-3 shrink-0 group">
          <img
            src="/logobeztla.webp"
            alt="Logos — Skup Bydła"
            class="h-8 w-auto object-contain"
            style="filter: brightness(0) invert(1); opacity: 0.7;"
            width="160" height="32"
          />
          <span class="text-sm font-semibold tracking-wide" style="color: #5a4e3e;">Logos Marcin Kiedel</span>
        </RouterLink>

      </div><!-- end flex row -->

      <!-- Bottom bar -->
      <div class="mt-5 pt-4 border-t grid grid-cols-3 items-center text-xs gap-2" style="border-color: rgba(200,146,42,0.08);">

        <!-- Left: empty spacer -->
        <div></div>

        <!-- Center: copyright stacked with CodeWave -->
        <div class="flex flex-col items-center gap-0.5 text-center" style="color: #2e2820;">
          <p>© {{ currentYear }} Logos Marcin Kiedel. Wszelkie prawa zastrzeżone.</p>
          <span class="font-medium" style="color: #3e3428;">Created by CodeWave</span>
        </div>

        <!-- Right: privacy -->
        <div class="text-right">
          <RouterLink to="/polityka-prywatnosci" class="text-xs transition-colors hover:text-[#c8922a]" style="color: #2e2820;">Polityka Prywatności</RouterLink>
        </div>

      </div>
    </div>
  </footer>
</template>
