<script setup>
import HeroSection from '../components/HeroSection.vue';
import { Truck, Scale, Banknote, Phone, PhoneCall, Clock, Handshake, ArrowRight, Users, Timer, ShieldCheck, MapPin, Star } from 'lucide-vue-next';
</script>

<template>
  <div>
    <HeroSection />

    <!-- ===== TRUST FEATURES ===== -->
    <section class="py-16 md:py-24" style="background: #0f1209; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="mb-12">
          <p class="text-xs uppercase tracking-widest font-bold mb-3" style="color: #c8922a;">Dlaczego my?</p>
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-4" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
            Dlaczego warto nam zaufać?
          </h2>
          <div class="w-12 h-0.5" style="background: linear-gradient(90deg, #c8922a, transparent);"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div class="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style="background: rgba(200,146,42,0.1); color: #c8922a; border: 1px solid rgba(200,146,42,0.25);">
              <Truck class="w-5 h-5" />
            </div>
            <h3 class="font-display text-lg font-bold mb-3" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
              Własna flota transportowa
            </h3>
            <p class="text-sm leading-relaxed" style="color: #6b5a42;">
              Posiadamy specjalistyczne pojazdy do przewozu żywca. Odbieramy bydło bezpośrednio z Twojego gospodarstwa.
            </p>
            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>

          <div class="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style="background: rgba(200,146,42,0.1); color: #c8922a; border: 1px solid rgba(200,146,42,0.25);">
              <Scale class="w-5 h-5" />
            </div>
            <h3 class="font-display text-lg font-bold mb-3" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
              Uczciwa waga elektroniczna
            </h3>
            <p class="text-sm leading-relaxed" style="color: #6b5a42;">
              Ważenie odbywa się w Twojej obecności na legalizowanych wagach. Pełna transparentność i wydruk z wagi.
            </p>
            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>

          <div class="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style="background: rgba(200,146,42,0.1); color: #c8922a; border: 1px solid rgba(200,146,42,0.25);">
              <Banknote class="w-5 h-5" />
            </div>
            <h3 class="font-display text-lg font-bold mb-3" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
              Płatność od ręki
            </h3>
            <p class="text-sm leading-relaxed" style="color: #6b5a42;">
              Płacimy natychmiast po zważeniu i ustaleniu ceny. Gotówka lub szybki przelew na życzenie rolnika.
            </p>
            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="py-16 md:py-24 relative overflow-hidden" style="background: #0a0c08; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <!-- Subtle bg pattern -->
      <div class="absolute inset-0 opacity-[0.025]" style="background-image: repeating-linear-gradient(45deg, #c8922a 0, #c8922a 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div class="text-center mb-16">
          <p class="text-xs uppercase tracking-widest font-bold mb-3" style="color: #c8922a;">Bez biurokracji</p>
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-4" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
            Jak to działa?
          </h2>
          <p class="text-base max-w-xl mx-auto" style="color: #6b5a42;">
            Cały proces od kontaktu do płatności trwa zaledwie kilka godzin.
          </p>
          <div class="w-12 h-0.5 mx-auto mt-5" style="background: linear-gradient(90deg, transparent, #c8922a, transparent);"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative">
          <!-- Connector line desktop -->
          <div class="hidden md:block absolute top-14 left-[22%] right-[22%] h-px" style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>

          <!-- Step 1 -->
          <div class="text-center group relative z-10">
            <div class="relative w-28 h-28 mx-auto mb-6">
              <div class="w-full h-full rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
                style="background: #13160d; border: 1px solid rgba(200,146,42,0.2); box-shadow: 0 4px 24px rgba(0,0,0,0.4);">
                <PhoneCall class="w-10 h-10" style="color: #c8922a;" />
              </div>
              <div class="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-lg"
                style="background: linear-gradient(135deg, #c8922a, #a97820); color: #f0ead8;">1</div>
            </div>
            <h3 class="font-display text-xl font-bold mb-2" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">Zadzwoń do nas</h3>
            <p class="text-sm leading-relaxed max-w-xs mx-auto" style="color: #6b5a42;">
              Zadzwoń i podaj ile sztuk bydła chcesz sprzedać. Ustalamy termin odbioru — nawet na ten sam dzień.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center group relative z-10">
            <div class="relative w-28 h-28 mx-auto mb-6">
              <div class="w-full h-full rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
                style="background: #13160d; border: 1px solid rgba(200,146,42,0.2); box-shadow: 0 4px 24px rgba(0,0,0,0.4);">
                <Truck class="w-10 h-10" style="color: #c8922a;" />
              </div>
              <div class="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-lg"
                style="background: linear-gradient(135deg, #c8922a, #a97820); color: #f0ead8;">2</div>
            </div>
            <h3 class="font-display text-xl font-bold mb-2" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">Przyjeżdżamy i ważymy</h3>
            <p class="text-sm leading-relaxed max-w-xs mx-auto" style="color: #6b5a42;">
              Nasz transport przyjeżdża na miejsce. Ważymy bydło na legalizowanej wadze elektronicznej w Twojej obecności.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center group relative z-10">
            <div class="relative w-28 h-28 mx-auto mb-6">
              <div class="w-full h-full rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
                style="background: #13160d; border: 1px solid rgba(200,146,42,0.2); box-shadow: 0 4px 24px rgba(0,0,0,0.4);">
                <Handshake class="w-10 h-10" style="color: #c8922a;" />
              </div>
              <div class="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-lg"
                style="background: linear-gradient(135deg, #c8922a, #a97820); color: #f0ead8;">3</div>
            </div>
            <h3 class="font-display text-xl font-bold mb-2" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">Płacimy gotówką</h3>
            <p class="text-sm leading-relaxed max-w-xs mx-auto" style="color: #6b5a42;">
              Natychmiast po ustaleniu ceny płacimy gotówką do ręki lub przelewem. Szybko, uczciwie i bez komplikacji.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== ABOUT / STORY ===== -->
    <section class="py-16 md:py-24 relative overflow-hidden" style="background: #0f1209; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <!-- Image -->
          <div class="relative order-2 lg:order-1">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl" style="border: 1px solid rgba(200,146,42,0.2);">
              <img src="/transport_premium_1772742853585.png" alt="Zaufany partner dla rolnika" class="w-full h-80 lg:h-[420px] object-cover" loading="lazy" decoding="async" width="800" height="420" style="filter: brightness(0.8) saturate(1.1);" />
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(10,12,8,0.7), transparent 60%);"></div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -bottom-4 left-4 right-4 flex justify-between gap-3">
              <div class="flex-1 p-4 rounded-xl shadow-xl backdrop-blur-md" style="background: rgba(10,12,8,0.95); border: 1px solid rgba(200,146,42,0.25);">
                <p class="text-[10px] uppercase tracking-widest font-bold mb-0.5" style="color: #6b5a42;">Doświadczenie</p>
                <p class="text-2xl font-black tracking-tight" style="color: #c8922a;">18+ lat</p>
              </div>
              <div class="flex-1 p-4 rounded-xl shadow-xl backdrop-blur-md" style="background: rgba(10,12,8,0.95); border: 1px solid rgba(200,146,42,0.25);">
                <p class="text-[10px] uppercase tracking-widest font-bold mb-0.5" style="color: #6b5a42;">Zasięg</p>
                <p class="text-2xl font-black tracking-tight" style="color: #c8922a;">Cała PL</p>
              </div>
            </div>
          </div>

          <!-- Text -->
          <div class="order-1 lg:order-2">
            <p class="text-xs uppercase tracking-widest font-bold mb-4" style="color: #c8922a;">Zaufaj doświadczeniu</p>
            <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8;">
              Firma z <em class="not-italic" style="color: #c8922a;">tradycją</em> i<br>szacunkiem do&nbsp;rolnika.
            </h2>
            <p class="text-base leading-relaxed mb-5" style="color: #6b5a42;">
              Nazywam się <strong style="color: #d4c8b0;">Marcin Kiedel</strong> i od ponad 18 lat prowadzę firmę Logos. Przez ten czas zbudowałem relacje z setkami rolników z całego województwa zachodniopomorskiego.
            </p>
            <p class="text-base leading-relaxed mb-8" style="color: #6b5a42;">
              Szanuję ciężką pracę rolnika — dlatego stawiam na <strong style="color: #d4c8b0;">uczciwość, terminowość</strong> i <strong style="color: #d4c8b0;">rzetelne warunki</strong>. Każda transakcja to moje słowo honoru.
            </p>
            <RouterLink
              to="/o-nas"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:gap-3 group"
              style="color: #f0ead8; background: linear-gradient(135deg, #c8922a, #a97820); box-shadow: 0 6px 24px rgba(200,146,42,0.2);"
            >
              Poznaj naszą historię
              <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== STATS ===== -->
    <section class="py-16 md:py-20" style="background: #0a0c08; border-bottom: 1px solid rgba(200,146,42,0.1);">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="text-center mb-14">
          <p class="text-xs uppercase tracking-widest font-bold mb-3" style="color: #c8922a;">Nasze liczby</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight" style="color: #f0ead8;">
            Liczby mówią same
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div v-for="(stat, i) in [
            { icon: Clock, value: '18+', label: 'Lat na rynku' },
            { icon: Users, value: '1000+', label: 'Rolników' },
            { icon: Timer, value: '24h', label: 'Czas reakcji' },
            { icon: MapPin, value: 'Cała', label: 'Polska' },
          ]" :key="i"
            class="group relative rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style="background: #13160d; border: 1px solid rgba(200,146,42,0.15);"
          >
            <div class="w-10 h-10 mx-auto mb-4 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
              style="background: rgba(200,146,42,0.08); color: #c8922a; border: 1px solid rgba(200,146,42,0.2);">
              <component :is="stat.icon" class="w-5 h-5" />
            </div>
            <p class="text-3xl md:text-4xl font-black tracking-tight mb-1" style="color: #e8ad40;">{{ stat.value }}</p>
            <p class="text-xs uppercase tracking-widest font-bold" style="color: #4a3f30;">{{ stat.label }}</p>

            <div class="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
              style="background: linear-gradient(90deg, transparent, rgba(200,146,42,0.4), transparent);"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative py-16 md:py-24 overflow-hidden" style="background: #0f1209;">
      <!-- Diagonal gold lines decoration -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: repeating-linear-gradient(-45deg, #c8922a 0, #c8922a 1px, transparent 0, transparent 60px);"></div>

      <div class="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div class="relative rounded-3xl px-8 py-14 shadow-2xl overflow-hidden"
          style="background: #13160d; border: 1px solid rgba(200,146,42,0.25);">

          <!-- Top gold line -->
          <div class="absolute top-0 left-[15%] right-[15%] h-0.5" style="background: linear-gradient(90deg, transparent, #c8922a, transparent);"></div>

          <!-- Icon -->
          <div class="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style="background: rgba(200,146,42,0.1); border: 1px solid rgba(200,146,42,0.3); color: #c8922a;">
            <Phone class="w-6 h-6" />
          </div>

          <p class="text-xs uppercase tracking-widest font-bold mb-4" style="color: #c8922a;">Skontaktuj się z nami</p>
          <h2 class="font-display text-3xl md:text-5xl font-bold mb-6" style="font-family: 'Barlow Condensed', sans-serif; color: #f0ead8; line-height: 1.2;">
            Umów się na odbiór<br>
            <em class="not-italic" style="color: #c8922a;">jeszcze dziś.</em>
          </h2>
          <p class="text-base leading-relaxed max-w-xl mx-auto mb-10" style="color: #6b5a42;">
            Jeden telefon wystarczy. Podpowiemy Ci najlepsze warunki sprzedaży i umówimy się na wygodny termin odbioru.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+48500277836"
              class="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-xl w-full sm:w-auto justify-center"
              style="background: linear-gradient(135deg, #c8922a, #a97820); color: #f0ead8; box-shadow: 0 8px 32px rgba(200,146,42,0.3);"
            >
              <Phone class="w-4 h-4" />
              +48 500 277 836
            </a>
            <RouterLink
              to="/kontakt"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:border-[rgba(200,146,42,0.5)] w-full sm:w-auto justify-center"
              style="color: #a09280; border: 1px solid rgba(200,146,42,0.2); background: transparent;"
            >
              Napisz do nas
              <ArrowRight class="w-4 h-4" />
            </RouterLink>
          </div>

          <!-- Trust badges -->
          <div class="flex flex-wrap justify-center gap-6 mt-10 pt-8" style="border-top: 1px solid rgba(200,146,42,0.1);">
            <div class="flex items-center gap-1.5 text-sm" style="color: #6b5a42;">
              <ShieldCheck class="w-4 h-4" style="color: #c8922a;" />
              <span class="font-medium">Bez zobowiązań</span>
            </div>
            <div class="flex items-center gap-1.5 text-sm" style="color: #6b5a42;">
              <Clock class="w-4 h-4" style="color: #c8922a;" />
              <span class="font-medium">Odpowiedź w 15 min</span>
            </div>
            <div class="flex items-center gap-1.5 text-sm" style="color: #6b5a42;">
              <Banknote class="w-4 h-4" style="color: #c8922a;" />
              <span class="font-medium">Uczciwe ceny</span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
